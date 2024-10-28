import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 url ='http://localhost:5180/api/TaskItems';
  constructor(private http: HttpClient) { }


  getTasks(){
    return this.http.get<task[]>(this.url);
  }
  createTask(task: task){
    return this.http.post(this.url, task);
  }
  
  deleteTask(taskId: number){
    return this.http.delete(this.url +'/'+ taskId)
  }
  updateTask( task:task){
    return this.http.put(this.url+'/'+task.id, task);
  }

  getTask(taskId: number){
  return this.http.get(this.url +'/'+ taskId)
  }


}

export interface task{
  id:number;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
}

