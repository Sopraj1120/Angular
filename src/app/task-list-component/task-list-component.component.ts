import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService, task } from '../task.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../search.pipe';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SearchPipe],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent implements OnInit {
  searchTerm: string = '';

  task:task[] =[];
User: any;
username:any[]=[];


  constructor(private taskService : TaskService, private router: Router, private toastr: ToastrService, private userService: UserService){

  }

  

  ngOnInit(): void {
   this.loadTask();
   
  }

  loadTask():void{
    this.taskService.getTasks().subscribe(a=>
      this.task = a
     )
  }

  OnDelete(taskId: number){
    if(confirm('Do you want to delete?'))
    this.taskService.deleteTask(taskId).subscribe(data =>{
      this.toastr.success('Task is deleted', "Deleted",{
        timeOut:8000,
        closeButton:true
      });
      this.loadTask();
      
    })
  }

 onEdit(taskId:number){
  this.router.navigate(['/edit',taskId])
 }
}
