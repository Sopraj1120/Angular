import { CommonModule } from '@angular/common';
import { Component ,OnInit
  
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService, task } from '../task.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule ],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  
  taskForm: any;
  taskId:number;

  constructor(private fb: FormBuilder, private taskService: TaskService, private route: ActivatedRoute , private router : Router, private toastr: ToastrService){
    this.taskId=Number( this.route.snapshot.paramMap.get("id"));
    this.taskForm = this.fb.group({
      id :[''],
      title:['',[Validators.required]],
      description:['',],
      dueDate:['',],
      priority:['',[Validators.required]]

    })
    
  }
  ngOnInit(): void {
    this.taskService.getTask(this.taskId).subscribe((a:any)=>{
      let dueDate = new Date(a.dueDate).toDateString().slice(0,10)
      this.taskForm.patchValue({
        id: a.id,
        title: a.title,
        description: a.description,
        dueDate: a.dueDate,
        priority: a.priority
      })
    })
  }
  onSubmit(){
    let task = this.taskForm.value;

    this.taskService.updateTask(task).subscribe(data =>{
    this.toastr.success("Task Update Successfully!")
      this.router.navigate(["/task"]);
  });
  }

  cancle(){
    this.taskForm.reset();
  }

}
