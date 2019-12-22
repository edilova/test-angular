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
  public isShown;
  public startIndex = 0;
  public endIndex = 10;
  public numberOfPages;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.numberOfPages = this.todos.length;
    });
  }

  addTodo(){
    this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
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
    return new Array(length / 10);
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
  }

  toggleShow(title) {
    this.isShown = title;
  }
}
