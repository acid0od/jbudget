import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list.component';
import { QuestionService } from './question.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: QuestionListComponent}
        ])
    ],
    declarations: [
        QuestionListComponent
    ],

    providers: [
        QuestionService
    ]

})

export class QuestionModule {

}
