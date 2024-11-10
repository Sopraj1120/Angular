import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  taskForm: FormGroup;
  loginuser:any[]=[];
  

  constructor(private fb: FormBuilder, private loginUserService: LoginuserService) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confrimPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator 
    });
  }
  ngOnInit(): void {
  
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confrimPassword')?.value 
      ? null : { mismatch: true };
  }
  registerUser() {
    console.log('Form Values:', this.taskForm.valid); 

    if (this.taskForm.valid) {
        const posTBody = this.taskForm.value;
        posTBody['role'] = posTBody.role === 'Admin' ? posTBody['role'] = 1 : posTBody.role === 'Editor' ? posTBody['role'] = 2 : posTBody['role'] = 3;
      this.loginUserService.createUser(posTBody).subscribe({
        next: (token: any) => {
          console.log(token.token);
          
          localStorage.setItem('authToken', token.token);
          
          this.loginuser.push(token.token);  
          alert("Registration successful. Token stored.");
          this.taskForm.reset();  
        },
        error: (error) => {
          console.error("Registration error:", error);
          alert("Registration failed. Please try again.");
        }
      });
    } else {
      alert("Please fix the errors in the form.");
    }
  }
  

}
