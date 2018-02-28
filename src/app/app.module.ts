import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ErrorComponent } from "./error/error.component";
import { AppRoutingModule } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./shared/navbar.component";
import { LoginComponent } from "./shared/login.component";
import { QuestionListComponent } from "./question/question-list.component";
import { QuestionComponent } from "./question/question.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { QuestionNewComponent } from "./question/question-new.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    QuestionListComponent,
    QuestionComponent,
    QuestionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
