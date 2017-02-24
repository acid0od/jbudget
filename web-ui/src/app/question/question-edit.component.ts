import {Component, OnInit, ElementRef, ViewChildren} from "@angular/core";
import {FormGroup, Validators, FormBuilder, FormArray, FormControlName} from "@angular/forms";
import {Question} from "./question.model";
import {GenericValidator} from "../shared/generic-validator";
import {IQuestion} from "./question";
import {Router, ActivatedRoute} from "@angular/router";
import {QuestionService} from "./question.service";
import {Subscription, Observable} from "rxjs";

@Component({
    selector: 'questions',
    templateUrl: './question-edit.component.html',
})

export class QuestionEditComponent implements OnInit {
    @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

    pageTitle: string = 'Question Edit';
    errorMessage: string;
    questionForm: FormGroup;
    question: IQuestion;

    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: {[key: string]: string} = {};
    private validationMessages: {[key: string]: {[key: string]: string}};
    private genericValidator: GenericValidator;


    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService) {

        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            title: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            type: {
                required: 'Product code is required.'
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    get answers(): FormArray {
        return <FormArray>this.questionForm.get('answers');
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            type: ['', Validators.required],
            cost: [0],
            accuracy: [10],
            prompt: [''],
            answers: this.fb.array([this.buildAnswer()])
        });


        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getQuestion(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.questionForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.questionForm);
        });
    }


    getQuestion(id: number): void {
        this.questionService.getQuestion(id)
            .subscribe(
                (question: IQuestion) => this.onQuestionRetrieved(question),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onQuestionRetrieved(product: IQuestion): void {
        if (this.questionForm) {
            this.questionForm.reset();
        }

        this.question = product;

        if (this.question.id === 0) {
            this.pageTitle = 'Add Question';
        } else {
            this.pageTitle = `Edit Question: ${this.question.title}`;
        }

        // Update the data on the form
        this.questionForm.patchValue({
            title: this.question.title,
            type: this.question.type,
            cost: this.question.cost,
            accuracy: this.question.accuracy,
            prompt: this.question.prompt
        });

        if (this.question.answers) {
            const answersFGs = this.question.answers.map(answers => this.fb.group(answers));
            const answersFormArray = this.fb.array(answersFGs);
            this.questionForm.setControl('answers', answersFormArray);
        } else {
            this.questionForm.setControl('answers', this.fb.array([this.buildAnswer()]));
        }

        //this.questionForm.setControl('answers', this.fb.array(this.question.answers || []));
    }

    save(): void {
        console.log('Saved: ' + JSON.stringify(this.questionForm.value));
    }

    buildAnswer(): FormGroup {
        return this.fb.group({
            title: [''],
            cost: [0],
            right: [0],
            prompt: ['']
        });
    }

    addAnswer(): void {
        this.answers.push(this.buildAnswer());
    }

    saveQuestion(): void {
        if (this.questionForm.dirty && this.questionForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.question, this.questionForm.value);

            this.questionService.saveQuestion(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.questionForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.questionForm.reset();
        this.router.navigate(['/questions']);
    }

}
