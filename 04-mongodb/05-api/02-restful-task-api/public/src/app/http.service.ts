import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    this.displayTask();
  }

  getTasks() {
    let tempObservable = this.http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got the tasks!", data));
  }

  displayTask() {
    let displayTask = this.http.get('/5d2e28540577b62eb0494630');
    displayTask.subscribe(data => console.log("got the task!", data));
  }


}
