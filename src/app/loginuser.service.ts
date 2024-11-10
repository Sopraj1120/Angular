import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  baseUrl='http://localhost:5180/api/';

  constructor(private http: HttpClient  ) {
  }

  createUser(loginUser: any){
    // return this.http.post(this.url,loginUser , {
    //   responseType: 'text'
    // })

    return this.http.post<any>(this.baseUrl + 'UserLogin/register', loginUser);
  }

  getLoginUser(loginUser: any) {
    // return this.http.post(this.baseUrl+'UserLogin/register', loginUser,
    //   {responseType: 'text'}
    // );
  }
}
