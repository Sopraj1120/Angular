import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TaskService, task } from './task.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,TaskListComponentComponent,TaskAddComponentComponent,TaskEditComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'practical';
  tasks:task[]=[];

  constructor(private taskService: TaskService){
    
  }

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe(d=>
    //   {this.tasks =d

    //   }
    // )
  }

 

  
}
