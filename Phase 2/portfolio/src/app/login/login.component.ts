import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() registerFormChange = new EventEmitter<boolean>();
  constructor() { }

  loginAttempt(){

  }
  goToRegisterForm(){
    console.log("goToRegisterForm clicked");
    this.registerFormChange.emit(true);

  }

  ngOnInit(): void {
  }

  
}
