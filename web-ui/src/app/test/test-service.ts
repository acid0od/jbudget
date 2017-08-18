import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IQuestion } from '../model/question';
import { AppState } from '../app.service';


@Injectable()
export class TestService {
    private apiUrl = 'api/test';

    constructor(private http: Http, private appState: AppState) {

    }

    public getQuestions(): Observable<IQuestion[]> {
        return this.http.get(this.formUrl() + '/testQuestions')
            .map(this.extractData)
            .do((data) => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        return response.json() || {};
    }

    private handleError(errorResponse: Response | any) {
        let errorMessage: string;
        if (errorResponse instanceof Response) {
            const body = errorResponse.json() || '';
            const error = body.error || JSON.stringify(body);
            errorMessage = `${errorResponse.status} - ${errorResponse.statusText || ''} ${error}`;
        } else {
            errorMessage = errorResponse.message ? errorResponse.message : errorResponse.toString();
        }
        return Observable.throw(errorMessage);
    }

    private formUrl() {
        return this.appState.get('serverUrl') + this.apiUrl;
    }

    private buildOptions(): RequestOptions {
        let headersOps = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({
            headers: headersOps
        });
    }
}
