import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Location} from "@angular/common";

import 'rxjs/add/operator/switchMap';

import {QuestionService} from "./question.service";
import {Question} from "./question";

@Component ({
  selector: 'question',
  templateUrl: './question.component.html',
  // styleUrls: ['./question.component.css'],
  providers: [QuestionService]
})

export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor (
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.questionService.getQuestion(+params.get('id')))
      .subscribe(question => this.question = question);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.questionService.update(this.question)
      .then(() => this.goBack());
  }

  delete(): void {
    this.questionService.delete(this.question)
      .then(() => this.goBack());
  }
}
