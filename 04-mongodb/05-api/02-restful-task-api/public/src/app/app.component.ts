import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Continued';
  tasks: Task[] = [];

  constructor(private httpService: HttpService) {
  }
  ngOnInit() {
    this.getTasksFromService();
  }


  getTasksFromService(): void {
    let observable = this.httpService.getTasks();
    observable.subscribe(data => {
      console.log("baby I got your data don't you worry", data)
      this.tasks = data;
    })
  }
}
