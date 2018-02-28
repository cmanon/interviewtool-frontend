import {Component} from "@angular/core";
import {Location} from "@angular/common";

import {Question} from "./question";
import {QuestionService} from "./question.service";

@Component ({
  selector: 'question-new',
  templateUrl: './question-new.component.html',
  providers: [QuestionService]
})

export class QuestionNewComponent {
  question = new Question(null, null, '', '');

  categories = [
    {'id': 1, 'name': 'General'},
    {'id': 2, 'name': 'Cultural'},
    {'id': 3, 'name': 'OOP'}
  ];

  constructor (
    private questionService: QuestionService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  add(): void  {
    this.questionService.create(this.question);
  }
}
