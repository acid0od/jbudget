import {Component, Input} from "@angular/core";
import {Question} from "./question.model";

@Component({
    selector: 'questions',
    templateUrl: './question.component.html',
})

export class QuestionComponent {
    @Input() question: Question;
}
