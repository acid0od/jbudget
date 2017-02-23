import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from  "@angular/forms"
import {RouterModule} from '@angular/router';
import {QuestionModule} from "./question/question.module";
import {WelcomeComponent} from "./home/welcome.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
        QuestionModule
    ],
    declarations: [
        WelcomeComponent,
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
