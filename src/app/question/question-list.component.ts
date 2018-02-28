import { Component, OnInit } from "@angular/core";

import { Question } from "./question";
import { QuestionService } from "./question.service";

@Component ({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions = questions);
  }
}
