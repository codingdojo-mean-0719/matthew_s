import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Tasks Interactive';
  tasks: Task[] = [];
  task = [];


  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }

  onButtonClick(): void {
    let observable = this.httpService.getTasks();
    observable.subscribe(data => {
      console.log("hey, dirty, baby I got your data", data)
      this.tasks = data;
    })
  }

  showTaskDetails(task_id) {
    console.log(task_id);
    let observable = this.httpService.getTask(task_id);
    observable.subscribe(data => {
      console.log("got the one task", data)
      this.task = data;
    })

  }
}
