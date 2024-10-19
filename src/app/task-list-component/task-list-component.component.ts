import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent implements OnInit {

  task:any[] =[];

  constructor(private taskService : TaskService){

  }

  ngOnInit(): void {
   this.taskService.getTask().subscribe(a=>
    this.task = a
   )
  }

  OnDelete(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(data =>{
      alert('task is Delete Successfully!...');
      this.taskService.getTask().subscribe(a=>
        this.task = a
      )
    })
  }

}
