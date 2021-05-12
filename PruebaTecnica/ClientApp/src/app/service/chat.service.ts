import { Injectable, Inject } from '@angular/core';
import { MyResponse } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';

import { Router } from "@angular/router"

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
    'Authorizacion': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
let test: any = {};
export class ChatService {
  baseUrl: string;
  

  constructor(protected http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    this.baseUrl = baseUrl;
  }

  //public GetMessage(): Observable<Message[]> {

  //  return this.http.get<Message[]>(this.baseUrl + 'api/Chat/Message');
  //}

  public Add(FirstName, SurName, Identification, Password, Email) {
    this.http.post<MyResponse>(this.baseUrl + 'api/User/Add', {
      'FirstName': FirstName, 'SurName': SurName, 'Identification': Identification
      , 'Password': Password, 'Email': Email
    }, httpOptions).
      subscribe(result => { console.log(result); },
        error => console.error(error));
  }

  public Login(User, Password) {
    this.http.post<MyResponse>(this.baseUrl + 'api/User/Login', {
      'User': User, 'Password': Password
    }, httpOptions).
      subscribe(result => {
          this.router.navigate(['/game'])
        console.log(result)
      },
        error => console.error(error));

    
  }

}
