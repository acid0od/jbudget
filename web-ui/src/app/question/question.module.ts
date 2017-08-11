import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list.component';
import { QuestionEditComponent } from './question-edit.component';
import { QuestionService } from './question.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'questions', component: QuestionListComponent },
            { path: 'questionEdit/new', component: QuestionEditComponent },
            { path: 'questionEdit/:id', component: QuestionEditComponent }
        ])
    ],
    declarations: [
        QuestionListComponent,
        QuestionEditComponent
    ],

    providers: [
        QuestionService
    ]

})

export class QuestionModule {

}
