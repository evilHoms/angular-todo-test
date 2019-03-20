import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.scss']
})
export class TodoSectionComponent implements OnInit {

  todoItems: Array<any> = [];
  doneItems: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  handleCreateClick = () => {
    const newItem = { id: String(Date.now() + Math.random()), value: '' };
    this.todoItems.push(newItem);
  }

  handleTypeChange = event => {
    if (event.type === 'done') {
      const index = this.doneItems.findIndex(item => (event.id === item.id));
      const splicedItem = this.doneItems.splice(index, 1);
      this.todoItems = this.todoItems.concat(event);
    } else {
      const index = this.todoItems.findIndex(item => (event.id === item.id));
      const splicedItem = this.todoItems.splice(index, 1);
      this.doneItems = this.doneItems.concat(event);
    }
    
  }

}
