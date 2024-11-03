import { Routes } from '@angular/router';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: 'task', component: TaskListComponentComponent},
    {path: 'add', component: TaskAddComponentComponent},
    {path: 'edit/:id', component:TaskEditComponent},
    {path: 'user', component:UserListComponent},
    {path: 'user-add', component: UserAddComponent},
    {path: 'user-edit/:id', component:UserEditComponent},
    {path:'', component:LoginComponent},
    {path:'User-register', component:RegisterComponent}
];
