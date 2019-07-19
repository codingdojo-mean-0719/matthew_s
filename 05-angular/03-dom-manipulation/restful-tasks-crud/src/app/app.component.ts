import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.interface';
import { observable } from 'rxjs';
import { TmplAstElement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Interactive';
  tasks: Task[] = [];
  task = [];
  newTask: any;
  editTask: any;


  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.newTask = { title: '', description: '', completed: '' };
    this.editTask = { _id: '', title: '', description: '' };
  }

  onButtonClick(): void {
    let observable = this.httpService.getTasks();
    observable.subscribe(data => {
      console.log('hey, dirty, baby I got your data', data);
      this.tasks = data;
    });
  }

  showTaskDetails(task_id) {
    console.log(task_id);
    let observable = this.httpService.getTask(task_id);
    observable.subscribe(data => {
      console.log('got the one task', data);
      this.task = data;
    });
  }

  onSubmit() {
    let observable = this.httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Data is here FOO!', data);
    });
    this.newTask = { title: '', description: '' };
  }

  onEditTaskSubmit(editTask) {
    let observable = this.httpService.updateTask(editTask);
    console.log(this.editTask);
    observable.subscribe(data => {
      console.log('task has been updated', data);
    });
  }

  onEditTask(task: Task) {
    this.editTask = {
      _id: task._id,
      title: task.title,
      description: task.description,
      completed: task.completed
    };
    console.log('selecting', this.editTask);
  }

  onDelete(task: Task) {
    console.log(task._id);
    let observable = this.httpService.deleteTask(task._id);
    console.log("deleted");
  }
}
