import {Component} from "@angular/core";
import {Question} from "./question/question.model";
import "../../public/css/styles.css";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
   /* questions: Question[];

    constructor() {
        this.questions = [
            new Question("title1", "type1", 10),
            new Question("title2", "type2", 10),
            new Question("title3", "type3", 10)
        ]
    }

    addQuestion(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding question: title: ${title.value} ${link.value}`);
        this.questions.push(new Question(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
    }*/
}
