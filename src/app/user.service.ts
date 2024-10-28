import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ='http://localhost:5180/api/Users';
   constructor(private http: HttpClient) { }
 
 
   getUser(){
     return this.http.get<any>(this.url);
   }
   createUser(user: user){
     return this.http.post(this.url, user);
   }
   
   deleteUser(userId: number){
     return this.http.delete(this.url +'/'+ userId)
   }
   updateUser( user:user){
     return this.http.put(this.url+'/'+user.id, user);
   }
 
   getUsers(userId: number){
   return this.http.get(this.url +'/'+ userId)
   }
 
 
 }
 
 export interface user{
   id:number;
   name: string;
   email: string;
   password: string;
   mobile: string;
   address:address;
   tasks: task;
 }

 export interface address{
  id:number;
  lane1:string;
  lane2:string;
  city:string;
  userid:number;
  user:user;
 }
 
 