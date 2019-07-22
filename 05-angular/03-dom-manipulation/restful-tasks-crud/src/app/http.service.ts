import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {
    this.getTasks();
  }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }
  getTask(task_id): Observable<Task[]> {
    console.log('ID is', task_id);
    return this.http.get<Task[]>('/' + task_id);
  }
  addTask(newtask) {
    return this.http.post('/create', newtask);
  }
  updateTask(editTask: Task): Observable<Task> {
    return this.http.put<Task>(`/update/${editTask._id}`, editTask);
  }
  deleteTask(task_id: string): Observable<Task> {
    console.log("deleting" + task_id);
    return this.http.delete<Task>(`/remove/${task_id}`);

  }
}
