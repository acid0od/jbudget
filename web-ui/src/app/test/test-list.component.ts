import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../model/question';
import { QuestionService } from '../question/question.service';
import { TestService } from './test-service';

@Component({
    selector: 'test-list-component',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
    public title: string = 'Questions';
    public questions: IQuestion[];
    public activeQuestion: number = -1;

    constructor(private testService: TestService) {

    }

    public ngOnInit(): void {
        this.testService.getQuestions()
            .subscribe((questions) => {
                this.questions = questions;
            });
    }

    public selectAnswer(questionIndex: number, answerIndex: number): void {
        let state = this.questions[questionIndex].state;
        if (state !== 'answered') {
            this.questions[questionIndex].selected = answerIndex;
            let answer = this.questions[questionIndex].answers[answerIndex];
            if (answer.right) {
                this.questions[questionIndex].correctness = 'correct';
            } else {
                this.questions[questionIndex].correctness = 'incorrect';
            }

            this.questions[questionIndex].state = 'answered';
        }
    }

    public isSelected(questionIndex: number, answerIndex: number): boolean {
        return this.questions[questionIndex].selected === answerIndex;
    }

    public isCorrect(questionIndex: number, answerIndex: number): boolean {
        if (this.questions[questionIndex].state
            && this.questions[questionIndex].state === 'answered') {
            return this.questions[questionIndex].answers[answerIndex].right;
        } else {
            return false;
        }
    }

    public isAnsweredWasCorrected(questionIndex: number): boolean {
        if (this.questions[questionIndex].selected) {
            let selected = this.questions[questionIndex].selected;
            return this.questions[questionIndex].answers[selected].right;
        }
        return false;
    }

    public selectContinue(): void {
        this.activeQuestion += 1;
    }
}
