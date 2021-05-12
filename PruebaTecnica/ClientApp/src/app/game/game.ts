import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { error } from '@angular/compiler/src/util';
import { ChatService } from '../service/chat.service';
import { Message } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'game-app',
  templateUrl: "./game.html"
})
export class Game {

  changeOne = new FormControl('');
  changeTwo = new FormControl('');
  changeThree = new FormControl('');
  changeFour = new FormControl('');
  changeFive = new FormControl('');
  changeSix = new FormControl('');
  changeSeven = new FormControl('');
  changeEight = new FormControl('');
  changeNine = new FormControl('');
  public variable;
  public cambio: boolean = true;
  public num: number = 1;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, protected chatService: ChatService) {
    
  }

  public ChangeOne() {
    
    if (this.changeOne.value == "")
    {
      this.Cambio();
      this.changeOne.setValue(this.variable);
    }
    
    //this.Cambio();
  }
  public ChangeTwo() {
    //this.Cambio();
    if (this.changeTwo.value == "") {
      this.Cambio();
      this.changeTwo.setValue(this.variable);
    }
    //this.changeTwo.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeThree() {
    //this.Cambio();
    if (this.changeThree.value == "") {
      this.Cambio();
      this.changeThree.setValue(this.variable);
    }
    //this.changeThree.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeFour() {
    //this.Cambio();
    if (this.changeFour.value == "") {
      this.Cambio();
      this.changeFour.setValue(this.variable);
    }
    //this.changeFour.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeFive() {
    //this.Cambio();
    if (this.changeFive.value == "") {
      this.Cambio();
      this.changeFive.setValue(this.variable);
    }
    //this.changeFive.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeSix() {
    //this.Cambio();
    if (this.changeSix.value == "") {
      this.Cambio();
      this.changeSix.setValue(this.variable);
    }
    //this.changeSix.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeSeven() {
    //this.Cambio();
    if (this.changeSeven.value == "") {
      this.Cambio();
      this.changeSeven.setValue(this.variable);
    }
    //this.changeSeven.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeEight() {
    //this.Cambio();
    if (this.changeEight.value == "") {
      this.Cambio();
      this.changeEight.setValue(this.variable);
    }
    //this.changeEight.setValue(this.variable);
    //this.Cambio();
  }
  public ChangeNine() {
    //this.Cambio();
    if (this.changeNine.value == "") {
      this.Cambio();
      this.changeNine.setValue(this.variable);
    }
    //this.changeNine.setValue(this.variable);
    //this.Cambio();
  }

  public Cambio() {
    this.num++;
    if (this.num%2==0) {
      this.variable = 'X'
    } else {
      this.variable = 'O'
    }
  }

  public Clear() {
    this.changeOne.setValue('');
    this.changeTwo.setValue('');
    this.changeThree.setValue('');
    this.changeFour.setValue('');
    this.changeFive.setValue('');
    this.changeSix.setValue('');
    this.changeSeven.setValue('');
    this.changeEight.setValue('');
    this.changeNine.setValue('');
  }

}
