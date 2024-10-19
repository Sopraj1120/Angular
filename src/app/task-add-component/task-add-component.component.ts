import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-add-component.component.html',
  styleUrl: './task-add-component.component.css'
})
export class TaskAddComponentComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router){
    this.taskForm = this.fb.group({
      title:['',[Validators.required]],
      description:['',],
      dueDate:['',],
      priority:['',[Validators.required]],
    })
  }

  onSubmit(){
    let task = this.taskForm.value;

    this.taskService.createTask(task).subscribe(data =>{
      alert("Task is created Successfully!");
      this.router.navigate(["/"]);
  });
  }

  cancle(){
    this.taskForm.reset();
  }

}
