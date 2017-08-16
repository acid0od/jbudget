import { Routes } from '@angular/router';
import { QuestionComponent } from './question';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '', loadChildren: './test/test.module#TestModule' },
    { path: 'questions', loadChildren: './question/question.module#QuestionModule' },
    { path: 'tests', loadChildren: './test/test.module#TestModule' },
    { path: '**', component: NoContentComponent },
];
