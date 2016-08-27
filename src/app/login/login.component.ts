import {Component} from '@angular/core';

import {LoginService} from './login.service';

import {HTTP_PROVIDERS} from '@angular/http';

import {NgFor} from '@angular/common';

// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'login',
    // Let Angular 2 know about `Http` and `TodoService`
    providers: [...HTTP_PROVIDERS, LoginService],
    template: require('./login.html')
})
export class Login {
  public sesion: Boolean;
  constructor(public loginService: LoginService) {
    this.sesion = true;  
    console.log('Todo constructor go!');
    
  }

//   createTodo() {

//       this.todoService.createTodo(this.todoData)
//         .subscribe((res) => {

//             // Populate our `todo` array with the `response` data
//             this.todos = res;
//             // Reset `todo` input
//             this.todoData.text = '';
//         });
//   }

//   deleteTodo(id) {

//     this.todoService.deleteTodo(id)
//       .subscribe((res) => {

//           // Populate our `todo` array with the `response` data
//           this.todos = res;
//       });
//   }
}
