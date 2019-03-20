import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoSectionComponent } from './todo-section/todo-section.component';
import { TodoItemComponent } from './todo-section/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoSectionComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
