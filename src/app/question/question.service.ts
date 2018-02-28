import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {environment} from "../../environments/environment";

import 'rxjs/add/operator/toPromise';

import { Question } from "./question";

@Injectable()

export class QuestionService {
  private questionUrl = environment.apiUrl + 'question';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getQuestions(): Promise<Question[]> {
    return this.http.get(this.questionUrl)
      .toPromise()
      .then(response => response.json()._embedded.question as Question[]).catch()
      .catch(this.handleError);
  }

  getQuestionsSlowly(): Promise<Question[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getQuestions()), 2000);
    })
  }

  getQuestion(id: number): Promise<Question> {
    const url = `${this.questionUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Question)
      .catch(this.handleError);
  }

  create(question: Question): Promise<Question> {
    const url = `${this.questionUrl}`;
    return this.http
      .post(url, JSON.stringify(question), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Question)
      .catch(this.handleError);
  }

  update(question: Question): Promise<Question> {
    const url = `${this.questionUrl}/${question.id}`;
    return this.http
      .put(url, JSON.stringify(question), {headers: this.headers})
      .toPromise()
      .then(() => question)
      .catch(this.handleError);
  }

  delete(question: Question): Promise<Question> {
    const url = `${this.questionUrl}/${question.id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error ocurred: ', error);
    return Promise.reject(error.message || error);
  }
}
