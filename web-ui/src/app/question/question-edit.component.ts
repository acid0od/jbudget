import {
    AfterViewInit, Component, ElementRef, OnDestroy,
    OnInit,
    ViewChildren
} from '@angular/core';
import { FormArray, FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from './question.service';
import { IQuestion } from '../model/question';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericValidator } from '../shared/generic-validator';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Answer } from '../model/answer';

@Component({
    selector: 'questionEditComponent',
    templateUrl: 'question-edit.component.html',
    styles: ['']
})
export class QuestionEditComponent implements OnInit, OnDestroy, AfterViewInit {
    public pageTitle: string = 'Question Edit';
    public errorMessage: string;
    public questionForm: FormGroup;
    public question: IQuestion;

    private sub: Subscription;

    // Use with the generic validation message class
    private displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;
    @ViewChildren(FormControlName, { read: ElementRef }) private formInputElements: ElementRef[];

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private questionService: QuestionService) {

        this.validationMessages = {
            title: {
                required: 'Question title is required.',
                minlength: 'Question title must be at least three characters.',
                maxlength: 'Question title cannot exceed 500 characters.'
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
        return <FormArray> this.questionForm.get('answers');
    }

    public ngAfterViewInit(): void {
      /*  let controlBlurs: Array<Observable<any>> = this.formInputElements
            .map((formControl: ElementRef) => {
                Observable.fromEvent(formControl.nativeElement, 'blur');
            });

        Observable.merge(this.questionForm.valueChanges, ...controlBlurs).debounceTime(800)
            .subscribe((value) => {
                this.displayMessage = this.genericValidator.processMessages(this.questionForm);
            });*/
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    public ngOnInit(): void {
        this.questionForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            type: ['', Validators.required],
            cost: [0],
            accuracy: [10],
            prompt: [''],
            answers: this.fb.array([this.buildAnswer()])
        });

        this.sub = this.route.params.subscribe(
            (params) => {
                let id = params['id'];
                this.getQuestion(id);
            }
        );
    }

    public onQuestionRetrieved(product: IQuestion): void {
        if (this.questionForm) {
            this.questionForm.reset();
        }

        this.question = product;

        if (this.question.id === null || this.question.id === '') {
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
            let formArrayBody = this.fb.array(this.buildAndFillAnswer(this.question.answers));
            this.questionForm.setControl('answers', formArrayBody);
        } else {
            this.questionForm.setControl('answers', this.fb.array([this.buildAnswer()]));
        }
    }

    public save(): void {
        console.log('Saved: ' + JSON.stringify(this.questionForm.value));
    }

    public addAnswer(): void {
        this.answers.push(this.buildAnswer());
    }

    public saveQuestion(): void {
        if (this.questionForm.dirty && this.questionForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.question, this.questionForm.value);

            this.questionService.saveQuestion(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any> error
                );
        } else if (!this.questionForm.dirty) {
            this.onSaveComplete();
        }
    }

    private onSaveComplete(): void {
        // Reset the form to clear the flags
        this.questionForm.reset();
        this.router.navigate(['/questions']);
    }

    private getQuestion(id: string): void {
        this.questionService.getQuestion(id)
            .subscribe(
                (question: IQuestion) => {
                    this.onQuestionRetrieved(question);
                },
                (error: any) => {
                    this.errorMessage = <any> error;
                }
            );
    }

    private buildAndFillAnswer( answers: Answer[] ): FormGroup[] {
        let resultFormGroup: any[] = [];

        if (answers !== null ) {

            answers.forEach((value) => {
                resultFormGroup.push(this.fb.group({
                    title: [value.title],
                    cost: [value.cost],
                    right: [value.right],
                    prompt: [value.prompt]
                }));
            });
            if (resultFormGroup.length > 0) {
                return resultFormGroup;
            }
        }

        return [this.buildAnswer()];
    }

    private buildAnswer(): FormGroup {
        return this.fb.group({
            title: [''],
            cost: [0],
            right: [false],
            prompt: ['']
        });
    }
/*


    private copyToQuestion(): IQuestion {

        let p = Object.assign({}, this.question, this.questionForm.value);
        if (this.questionForm.value.answers) {

        }

        if (value.onlyToNotifCenter) {
            notification.onlyToNotifCenter = value.onlyToNotifCenter;
        } else {
            notification.onlyToNotifCenter = false;
        }

        if (isDefined(value.msgTitles)) {
            notification.msgTitle = Object.create(null);
            value.msgTitles.forEach((s) => {
                if (s.key !== '' && s.value !== '') {
                    notification.msgTitle[s.key] = s.value;
                }
            });
        }
        return p;
    }

*/

}
