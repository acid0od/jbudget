import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../model/question';
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
    public totalQuestion: number = 0;
    public percentage: string = '';
    public score: number = 0;

    constructor(private testService: TestService) {

    }

    public ngOnInit(): void {
        this.testService.getQuestions()
            .subscribe((questions) => {
                this.questions = questions;
                this.totalQuestion = questions.length;
            });
    }

    public selectAnswer(questionIndex: number, answerIndex: number): void {
        let state = this.questions[questionIndex].state;
        if (state !== 'answered') {
            this.questions[questionIndex].selected = answerIndex;
            let answer = this.questions[questionIndex].answers[answerIndex];
            if (answer.right) {
                this.questions[questionIndex].correctness = 'correct';
                this.score++;
            } else {
                this.questions[questionIndex].correctness = 'incorrect';
            }

            this.questions[questionIndex].state = 'answered';
        }

        this.percentage = ((this.score / this.totalQuestion ) * 100).toFixed(1);

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
