import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Lname:string = "";
  Fname:string ="";
  userName:string = "";
  password:string = "";

  @Output() backToLogin = new EventEmitter<boolean>();

  


  constructor() { }

  returnToLogin() {
    //console.log("");
    this.backToLogin.emit(true);

  }

  saveData(){
    let user ={
      fname: this.Fname,
      lname:this.Lname,
      username:this.userName,
      password:this.password,
    }
    let userJSON = JSON.stringify(user);
    localStorage.setItem(this.userName, userJSON);
    this.backToLogin.emit(true);
    this.restData();

  }

  restData(){
    this.Fname = "";
    this.Lname = "";
    this.userName = "";
    this.password = "";
    
    
  }

  ngOnInit(): void {
  }

}
