import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {IQuestion} from "./question";
import {Answer} from "../answer/answer.model";

@Injectable()
export class QuestionService {
    private baseUrl = 'api/questions';

    constructor(private http: Http) { }

    getQuestions(): Observable<IQuestion[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getQuestions: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getQuestion(id: number): Observable<IQuestion> {
        if (id === 0) {
            return Observable.of(this.initializeQuestion());
            // return Observable.create((observer: any) => {
            //     observer.next(this.initializeProduct());
            //     observer.complete();
            // });
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getQuestion: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    saveQuestion(question: IQuestion): Observable<IQuestion> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (question.id === 0) {
            return this.createQuestion(question, options);
        }
        return this.updateQuestion(question, options);
    }

    private createQuestion(question: IQuestion, options: RequestOptions): Observable<IQuestion> {
        question.id = undefined;
        return this.http.post(this.baseUrl, question, options)
            .map(this.extractData)
            .do(data => console.log('createQuestion: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateQuestion(question: IQuestion, options: RequestOptions): Observable<IQuestion> {
        const url = `${this.baseUrl}/${question.id}`;
        return this.http.put(url, question, options)
            .map(() => question)
            .do(data => console.log('updateQuestion: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeQuestion(): IQuestion {
        // Return an initialized object
        return {
            id: 0,
            title: null,
            type: null,
            cost: 0,
            accuracy: 0,
            prompt: null,
            answers: Answer['']
        };
    }
}