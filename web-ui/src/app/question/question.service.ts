import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IQuestion } from '../model/question';
import { Answer } from '../model/answer';
import { AppState } from '../app.service';

@Injectable()
export class QuestionService {
    private apiUrl = 'api/question';

    constructor(private http: Http, private appState: AppState) {

    }

    public getQuestions(): Observable<IQuestion[]> {
        return this.http.get(this.formUrl() + '/allQuestions')
            .map(this.extractData)
            .do((data) => console.log(JSON.stringify(data)));
    }

    public getQuestion(id: string): Observable<IQuestion> {
        if (id === '' || id === 'new') {
            return Observable.of(this.initializeQuestion());
        }

        return this.http.get(this.formUrl() + '/' + id)
            .map(this.extractData)
            .do((data) => {
                console.log('getQuestion: ' + JSON.stringify(data));
            })
            .catch(this.handleError);
    }

    public saveQuestion(question: IQuestion): Observable<IQuestion> {
        if (question.id === null || question.id === '') {
            return this.createQuestion(question, this.buildOptions());
        }
        return this.updateQuestion(question, this.buildOptions());
    }

    private createQuestion(question: IQuestion, options: RequestOptions): Observable<IQuestion> {
        question.id = undefined;
        return this.http.post(this.formUrl() + '/', question, options)
            .map(this.extractData)
            .do((data) => {
                console.log('createQuestion: ' + JSON.stringify(data));
            })
            .catch(this.handleError);
    }

    private updateQuestion(question: IQuestion, options: RequestOptions): Observable<IQuestion> {
        console.log('___' + JSON.stringify(question));
        return this.http.put(this.formUrl() + '/' + question.id, question, options)
            .map(() => question)
            .do((data) => {
                console.log('updateQuestion: ' + JSON.stringify(data));
            })
            .catch(this.handleError);
    }

    private initializeQuestion(): IQuestion {
        return {
            id: '',
            title: null,
            type: null,
            cost: 0,
            accuracy: 0,
            prompt: null,
            answers: Answer['']
        };
    }

    private extractData (response: Response) {
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
