/**
 * Angular 2 decorators and services
 */
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.css'
    ],
    template: `
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">QuickQuiz</a>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" [routerLink]=" ['./questions']"
                           routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                            Questions
                        </a>
                    </li>
                </ul>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <!--            <a [routerLink]=" ['./'] "
                       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                        Index
                    </a>
                    <a [routerLink]=" ['./home'] "
                       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                        Home
                    </a>
                    <a [routerLink]=" ['./detail'] "
                       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                        Detail
                    </a>
                    <a [routerLink]=" ['./barrel'] "
                       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                        Barrel
                    </a>
                    <a [routerLink]=" ['./about'] "
                       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                        About
                    </a>-->
        <!--        <a [routerLink]=" ['./questions'] "
                   routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                    Questions
                </a>
        
                </nav>-->

        <main>
            <router-outlet></router-outlet>
        </main>
        <!--
                <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
        
                <footer>
                    <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
                    <div>
                        <a [href]="url">
                            <img [src]="angularclassLogo" width="25%">
                        </a>
                    </div>
                </footer>-->
    `
})
export class AppComponent implements OnInit {
    public angularclassLogo = 'assets/img/angularclass-avatar.png';
    public name = 'Angular 2 Webpack Starter';
    public url = 'https://twitter.com/AngularClass';

    constructor(public appState: AppState,
                elementRef: ElementRef) {
        this.appState.set('serverUrl', elementRef.nativeElement.getAttribute('serverUrl'));
    }

    public ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
