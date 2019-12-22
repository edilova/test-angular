import { Injectable } from '@angular/core';

const TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
  { title: 'Setup API 2', isDone: false },
  { title: 'Setup API 3', isDone: false },
  { title: 'Setup API 4', isDone: false },
  { title: 'Setup API 5', isDone: false },
  { title: 'Setup API 6', isDone: false },
  { title: 'Setup API 7', isDone: false },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(TODOS));
  }

  add(data) {
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    });
  }

  delete(selected) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === selected);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }

  put(changed) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }


}
