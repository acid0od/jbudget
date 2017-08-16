import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TestListComponent } from './test-list.component';
import { TestService } from './test-service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'tests', component: TestListComponent },
        ])
    ],
    declarations: [
        TestListComponent
    ],

    providers: [
        TestService
    ]

})

export class TestModule {

}
