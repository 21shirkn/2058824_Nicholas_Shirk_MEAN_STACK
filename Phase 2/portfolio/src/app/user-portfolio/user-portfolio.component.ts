import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {

  
  
  conName:string;
  conNumber:string;
  userContacts:[string,string][]=[]
  

  @Input() currentUser:string = ""; 
  userKey:string;

  ngOnChanges (change:SimpleChange){
    
    this.userKey = this.currentUser.concat("Contacts")
    console.log("on change trigger")
    console.log(this.userKey);
    let userContactsJSON = localStorage.getItem(this.userKey)
    
    if(userContactsJSON != null){
       this.userContacts = JSON.parse(userContactsJSON);

    }


  }
  
  constructor() { }

  

  saveData(){
    let userContactsJSON = localStorage.getItem(this.userKey)
    
    if(userContactsJSON != null){
       this.userContacts = JSON.parse(userContactsJSON);

    }
    let newContact:[string, string]=[this.conName, this.conNumber];
    this.userContacts.push(newContact);
    console.log(this.userContacts);

    userContactsJSON=JSON.stringify(this.userContacts);
    localStorage.setItem(this.userKey, userContactsJSON);

   
    


  }
   

  ngOnInit(): void {
  }

}
