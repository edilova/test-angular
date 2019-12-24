import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private todos;
  public newTodo;
  public isShown: boolean;
  public startIndex: number;
  public endIndex: number;
  public numberOfPages: number;
  public selectNum: number;
  public selectedPage: number = 1;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.startIndex = 0;
    this.endIndex = 10;
    this.selectNum = 10;
    this.getTodos();
  }

  getTodos() {
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.numberOfPages = this.todos.length;
    });
  }

  addTodo() {
    this.todoService.add({ title: this.newTodo}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
  }

  destroyTodo(todo) {
    this.todoService.delete(todo).then(() => {
      return this.getTodos();
    });
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      this.isShown = false;
      return this.getTodos();
    });
  }

  getArrayFromNumber(length) {
    return new Array(Math.ceil(length / this.selectNum));
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * this.selectNum;
    this.endIndex = this.startIndex + this.selectNum;
  }

  updateIndexFirst() {
    this.startIndex = 0;
    this.endIndex = 10;
  }

  updateIndexLast() {
    this.startIndex = this.todos.length - this.selectNum;
    this.endIndex = this.todos.length;
  }

  toggleShow(title) {
    this.isShown = title;
  }

  onSelect(page): void {
    this.selectedPage = page;
  }

  quantity(num) {
    this.startIndex = 0;
    this.endIndex = num;
    this.selectNum = num;
  }
}
