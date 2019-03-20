import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input('value') inputValue: String;
  @Input('id') inputId: String;
  @Input('type') inputType: 'todo' | 'done';
  @Output() typeChange = new EventEmitter<any>();

  value: String;
  type: 'todo' | 'done';
  className: String;
  id: String;

  constructor() { }

  ngOnInit() {
    this.value = this.inputValue;
    this.id = this.inputId;
    this.type = this.inputType;
    this.className = this.type === 'todo' ? 'todo-item' : 'todo-item done';
  }

  handleInputChange = event => {
    this.value = event.target.value;
  }

  handleChangeTypeClick = () => {
    this.typeChange.emit({ type: this.type, id: this.id, value: this.value });
  }

}
