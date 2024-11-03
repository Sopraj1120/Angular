import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
taskForm: FormGroup ;

constructor(private fb: FormBuilder){
  this.taskForm = this.fb.group({
    name:['',],
    email:['',],
    password:['',],
    confrimPassword:['',],
    role:['',]
  });
}

}
