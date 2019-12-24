import { Injectable } from '@angular/core';

const TODOS = [
  { title: 'Task name 1'},
  { title: 'Task name 2'},
  { title: 'Task name 3'},
  { title: 'Task name 4'},
  { title: 'Task name 5'},
  { title: 'Task name 6'},
  { title: 'Task name 7'},
  { title: 'Task name 8'},
  { title: 'Task name 9'},
  { title: 'Task name 10'},
  { title: 'Task name 11'},
  { title: 'Task name 12'},
  { title: 'Task name 13'},
  { title: 'Task name 14'},
  { title: 'Task name 15'},
  { title: 'Task name 16'},
  { title: 'Task name 17'},
  { title: 'Task name 18'},
  { title: 'Task name 19'},
  { title: 'Task name 20'},
  { title: 'Task name 21'},
  { title: 'Task name 22'},
  { title: 'Task name 23'},
  { title: 'Task name 24'},
  { title: 'Task name 25'},
  { title: 'Task name 26'},
  { title: 'Task name 27'},
  { title: 'Task name 28'},
  { title: 'Task name 29'},
  { title: 'Task name 30'},
  { title: 'Task name 31'},
  { title: 'Task name 32'},
  { title: 'Task name 33'},
  { title: 'Task name 34'},
  { title: 'Task name 35'},
  { title: 'Task name 36'},
  { title: 'Task name 37'},
  { title: 'Task name 38'},
  { title: 'Task name 39'},
  { title: 'Task name 40'},
  { title: 'Task name 41'},
  { title: 'Task name 42'},
  { title: 'Task name 43'},
  { title: 'Task name 44'},
  { title: 'Task name 45'},
  { title: 'Task name 46'},
  { title: 'Task name 47'},
  { title: 'Task name 48'},
  { title: 'Task name 49'},
  { title: 'Task name 50'},
  { title: 'Task name 51'},
  { title: 'Task name 52'},
  { title: 'Task name 53'},
  { title: 'Task name 54'},
  { title: 'Task name 55'},
  { title: 'Task name 56'},
  { title: 'Task name 57'},
  { title: 'Task name 58'},
  { title: 'Task name 59'},
  { title: 'Task name 60'},
  { title: 'Task name 61'},
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
