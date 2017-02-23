import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {QuestionEditComponent} from "./question-edit.component";
import {SharedModule} from "../shared/shared.module";
import {QuestionService} from "./question.service";
import {QuestionData} from "./question-data";
import {QuestionListComponent} from "./question-list.component";
import {QuestionDetailComponent} from "./question-detail.component";
import {QuestionFilterPipe} from "./question-filter.pipe";
import {QuestionEditGuard, QuestionDetailGuard} from "./question-guard.service";

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        InMemoryWebApiModule.forRoot(QuestionData),
        RouterModule.forChild([
            {path: 'questions', component: QuestionListComponent},
            {
                path: 'question/:id',
                canActivate: [QuestionDetailGuard],
                component: QuestionDetailComponent
            },
            {
                path: 'questionEdit/:id',
                canDeactivate: [QuestionEditGuard],
                component: QuestionEditComponent
            },
        ])
    ],
    declarations: [
        QuestionListComponent,
        QuestionDetailComponent,
        QuestionEditComponent,
        QuestionFilterPipe
    ],
    providers: [
        QuestionService,
        QuestionDetailGuard,
        QuestionEditGuard
    ]
})

export class QuestionModule {
}