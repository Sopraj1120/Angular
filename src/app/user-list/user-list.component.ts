import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SearchPipe } from '../search.pipe';
import { UserService, user } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,SearchPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  searchTerm: string = '';

  user:any[] =[];
  


  constructor(private userService : UserService, private router: Router, private toastr: ToastrService, private taskService: TaskService){

  }

  ngOnInit(): void {
   this.loadUser();
  }

  loadUser():void{
   
    this.userService.getUser().subscribe((a:any) =>{
      this.user = a;
      console.log(a);
    })
    
  }

  OnDelete(userId: number){
    if(confirm('Do you want to delete?'))
    this.userService.deleteUser(userId).subscribe(data =>{
      this.toastr.success('Task is deleted', "Deleted",{
        timeOut:8000,
        closeButton:true
      });
      this.loadUser();
      
    })
  }

 onEdit(userId:number){
  this.router.navigate(['/user-edit',userId])
 }
}
