import { Component ,OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-add-component',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule, CommonModule, FormsModule],
  templateUrl: './task-add-component.component.html',
  styleUrl: './task-add-component.component.css'
})
export class TaskAddComponentComponent  implements OnInit {

  taskForm: FormGroup;
  username:any[]=[];

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private toastr: ToastrService,  private userService: UserService){
    this.taskForm = this.fb.group({
      title:['',[Validators.required]],
      description:['',],
      dueDate:['',],
      priority:['',[Validators.required]],
      userId:['',],
      checklist:this.fb.array([])
    })
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(a=>{
      this.username=a
     })
  }
  onSubmit(){
    let task = this.taskForm.value;

    this.taskService.createTask(task).subscribe(data =>{
    
    this.toastr.success('Task is created Successfully!',"Added",{
      timeOut:8000,
      closeButton: true
    });
      this.router.navigate(["/task"]);
  });
  }
  get checklist() {
    return this.taskForm.get('checklist') as FormArray;
  }
  addChecklistItem() {
    this.checklist.push(this.fb.group({
      item: ['', Validators.required],   
      done: [false]                      
    }));
  }

  removeChecklistItem(index: number) {
    this.checklist.removeAt(index);
  }

  
  cancle(){
    this.taskForm.reset();
  }

}
