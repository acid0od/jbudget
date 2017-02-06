import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Question} from "./question.model";

@Component({
    selector: 'questions',
    templateUrl: './question.component.html',
})

export class QuestionComponent implements OnInit {
    questionForm: FormGroup;
    question: Question;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.questionForm = this.fb.group({
            title: [''],
            type: [''],
            cost: [0],
            accuracy: [10],
            prompt: ['']
        });
    }

    save(): void {
        console.log('Saved: ' + JSON.stringify(this.questionForm.value));
    }
}
