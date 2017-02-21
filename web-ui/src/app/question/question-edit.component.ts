import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder, FormArray} from "@angular/forms";
import {Question} from "./question.model";

@Component({
    selector: 'questions',
    templateUrl: './question-edit.component.html',
})

export class QuestionEditComponent implements OnInit {
    questionForm: FormGroup;
    question: Question;

    constructor(private fb: FormBuilder) {
    }

    get answers(): FormArray {
        return <FormArray>this.questionForm.get('answers');
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            type: [''],
            cost: [0],
            accuracy: [10],
            prompt: [''],
            answers: this.fb.array([this.buildAnswer()])
        });
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
}
