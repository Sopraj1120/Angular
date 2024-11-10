import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  taskForm: FormGroup;
  userLogin:any[]=[];

  constructor(private fb: FormBuilder, private loginUserService: LoginuserService){
    this.taskForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
     
    });
  }
  ngOnInit(): void {
    this.loginUser();
  }

  loginUser(){
  //  this.loginUserService.getLoginUser(this.loginUser).subscribe((a:any)=>{
  //   this.loginUser = a;
  //  })
  }
}
