import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,TaskListComponentComponent,TaskAddComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practical';

 

  
}
