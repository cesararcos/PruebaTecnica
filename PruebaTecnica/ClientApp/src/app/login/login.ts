import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { error } from '@angular/compiler/src/util';
import { ChatService } from '../service/chat.service';
import { Message } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'login-app',
  templateUrl: "./login.html"
})
export class Login {
  loginUserControl = new FormControl('');
  loginPasswordControl = new FormControl('');

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected chatService: ChatService) {

  }

  public Session() {
    this.chatService.Login(this.loginUserControl.value, this.loginPasswordControl.value);

    //this.router.navigate(['/register'])
  }

}
