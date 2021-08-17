import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  registerForm :boolean = false;
  loginForm: boolean = true;

  formChange(showRegFrom:boolean){
    console.log("form should change")
    this.registerForm = showRegFrom;
    this.loginForm = false;
  }
}
