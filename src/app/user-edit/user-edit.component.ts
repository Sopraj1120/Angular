import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  userForm: any;
  userId:number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.userForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      email: [''],
      password: [''],
      mobile: ['', [Validators.required]],
      address: this.fb.group({
        lane1: [''],
        lane2: [''],
        city: ['']
      })
    });
  }
  
  ngOnInit(): void {
    this.userService.getUsers(this.userId).subscribe((a: any) => {
      this.userForm.patchValue({
        id: a.id,
        name: a.name,
        email: a.email,
        password: a.password,
        mobile: a.mobile,
        address: {
          lane1: a.address?.lane1 || '',  
          lane2: a.address?.lane2 || '',
          city: a.address?.city || ''
        }
      });
    });
  }
  
  onSubmit(){
    let user = this.userForm.value;

    this.userService.updateUser(user).subscribe(data =>{
    this.toastr.success("Task Update Successfully!")
      this.router.navigate(["/"]);
  });
  }

  cancle(){
    this.userForm.reset();
  }

}


