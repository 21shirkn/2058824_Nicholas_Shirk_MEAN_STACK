import { Component, OnInit, Output,EventEmitter, ElementRef, ViewChild } from '@angular/core';

//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() registerFormChange = new EventEmitter<boolean>();
  @Output() toPortfolio = new EventEmitter<boolean>();
  @Output() currentUser = new EventEmitter<string>();
  logName:string = "";
  logPass:string = "";
  logMess:string = "";
  //constructor() { }
  

  loginAttempt(){

    let attUserJSON = localStorage.getItem(this.logName);
    if(attUserJSON != null){
      let attUser = JSON.parse(attUserJSON);
      if(attUser.password == this.logPass){
        console.log("login sucsess")
        this.toPortfolio.emit(true);
        this.currentUser.emit(this.logName);
      }else{
        this.logMess="Invalid Password"
      }
      
    }else{
      this.logMess="Invalid User"
    }

  }



  goToRegisterForm(){
    console.log("goToRegisterForm clicked");
    this.registerFormChange.emit(true);

  }

  ngOnInit(): void {
  }

  
}
