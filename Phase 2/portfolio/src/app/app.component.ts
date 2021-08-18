import { CursorError,  } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  registerForm :boolean = false;
  loginForm: boolean = true;
  togglePortfolio:boolean = false;
  currentUser:string = "";

  formChange(showRegFrom:boolean){
    console.log("form should change")
    this.registerForm = showRegFrom;
    this.loginForm = !showRegFrom;
  }

  toLogin(eventFlip:boolean){
    console.log("test event")
    this.registerForm=!eventFlip;
    this.loginForm=eventFlip;

  }

  loginToPort(eventFlip:boolean){
    this.loginForm = !eventFlip;
    this.togglePortfolio = eventFlip;
  }
  setCurrentUser(currentUser:string){
    this.currentUser = currentUser;
    console.log("current use set");
    console.log(currentUser);
    
  }
}
