import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit{
  userForm: FormGroup;


  constructor(private fb: FormBuilder, private taskService: UserService, private router: Router, private toastr: ToastrService){
    this.userForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',],
      password:['',],
      moblie:['',[Validators.required]],
      address:this.fb.group({
        lane1:['',],
        lane2:['',],
        city:['',]
      })
    })
  }
  ngOnInit(): void {}
  onSubmit(){
    let user = this.userForm.value;

    this.taskService.createUser(user).subscribe(data =>{
    
    this.toastr.success('Task is created Successfully!',"Added",{
      timeOut:8000,
      closeButton: true
    });
      this.router.navigate(["/"]);
  });
  }

  cancle(){
    this.userForm.reset();
  }

}


