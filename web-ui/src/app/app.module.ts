import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {QuestionComponent} from "./question/question.component";
import {ReactiveFormsModule} from  "@angular/forms"

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        QuestionComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
