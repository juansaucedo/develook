import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {
  constructor(public http:Http) {

  }

//   getAll() {
//       return this.http.get('/api/todo')
//           // map the `HTTP` response from `raw` to `JSON` format
//           // using `RxJs`
//           // Reference: https://github.com/Reactive-Extensions/RxJS
//           .map(res => res.json());
//   }

//   createTodo(data) {

//     let headers = new Headers();

//     headers.append('Content-Type', 'application/json');

//     return this.http.post('/api/todo', JSON.stringify(data),
//           {headers: headers})
//         .map(res => res.json());
//   }

//   deleteTodo(id) {

//       return this.http.delete(`/api/todo/${id}`)
//           .map(res => res.json());
//   }
}
