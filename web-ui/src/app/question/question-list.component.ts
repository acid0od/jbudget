import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { IQuestion } from '../model/question';

@Component({
    templateUrl: './question-list.component.html'
})

export class QuestionListComponent implements OnInit {

    public questions: IQuestion[];

    constructor(private questionService: QuestionService) {

    }

    ngOnInit(): void {
        console.log("QuestionListComponent");
        this.questionService.getQuestions()
            .subscribe(questions => {
                this.questions = questions
            });
    }

}



