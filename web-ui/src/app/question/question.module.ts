import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {QuestionEditComponent} from "./question-edit.component";

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