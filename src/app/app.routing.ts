import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ErrorComponent } from "./error/error.component";
import {HomeComponent} from "./home/home.component";
import {QuestionComponent} from "./question/question.component";
import {QuestionListComponent} from "./question/question-list.component";
import {QuestionNewComponent} from "./question/question-new.component";
import {LoginComponent} from "./shared/login.component";

@NgModule ({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'question/list', component: QuestionListComponent },
      { path: 'question/new', component: QuestionNewComponent },
      { path: 'question/:id', component: QuestionComponent },
      { path: '**', component: ErrorComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
