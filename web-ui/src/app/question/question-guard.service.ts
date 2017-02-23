import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';

import { QuestionEditComponent } from './question-edit.component';

@Injectable()
export  class QuestionDetailGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid question Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['/questions']);
            // abort current navigation
            return false;
        }
        return true;
    }
}

@Injectable()
export  class QuestionEditGuard implements CanDeactivate<QuestionEditComponent> {

    canDeactivate(component: QuestionEditComponent): boolean {
        if (component.questionForm.dirty) {
            let questionTitle = component.questionForm.get('title').value || 'New Question';
            return confirm(`Navigate away and lose all changes to ${questionTitle}?`);
        }
        return true;
    }
}