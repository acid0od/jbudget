
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IQuestion } from '../model/question';

@Injectable()
export class QuestionService {

    constructor (private http: Http) {

    }

    public getQuestions (): Observable<IQuestion[]> {
        return this.http.get("http://localhost:9832/quiz/question/allQuestions")
            .map(this.extractData)
            .do(data => console.log(JSON.stringify(data)))
    }

    private extractData(response: Response) {
        let body = response.json();
        return body || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}