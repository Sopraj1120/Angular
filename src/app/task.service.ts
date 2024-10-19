import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 url ='http://localhost:5180/api/TaskItems';
  constructor(private http: HttpClient) { }


  getTask(){
    return this.http.get<any[]>(this.url);
  }
  createTask(task: any){
    return this.http.post(this.url, task);
  }
  
  deleteTask(taskId: number){
    return this.http.delete(this.url +'/'+ taskId)
  }



}

