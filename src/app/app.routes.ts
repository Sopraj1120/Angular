import { Routes } from '@angular/router';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';

export const routes: Routes = [
    {path: '', component: TaskListComponentComponent},
    {path: 'add', component: TaskAddComponentComponent}
];
