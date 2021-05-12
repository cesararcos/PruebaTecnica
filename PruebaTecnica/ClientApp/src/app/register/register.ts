import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { error } from '@angular/compiler/src/util';
import { ChatService } from '../service/chat.service';
import { Message } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register-app',
  templateUrl: "./register.html"
})
export class Register {
  firstNameControl = new FormControl('');
  surNameControl = new FormControl('');
  identificationControl = new FormControl('');
  passwordControl = new FormControl('');
  emailControl = new FormControl('');

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected chatService: ChatService) {
    
    //this.GetInfo();

  }

  public SendRegister() {
    //this.firstNameControl.setValue('X');
    this.chatService.Add(this.firstNameControl.value, this.surNameControl.value, this.identificationControl.value
      , this.passwordControl.value, this.emailControl.value);

    //setTimeout(() => { this.GetInfo(); }, 300);

    //this.textControl.setValue('');
  }

}
