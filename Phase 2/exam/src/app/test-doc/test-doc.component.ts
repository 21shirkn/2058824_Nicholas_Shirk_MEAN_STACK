import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormControlDirective } from '@angular/forms';
import { Quest } from '../data.model';
import { DataService } from '../data.service';
import { ReactiveFormsModule} from '@angular/forms';



interface quest{
  qNum:string, 
  question:string, 
  A1:string, 
  A2:string, 
  A3:string,
  A4:string, 
  cA:string
}

@Component({
  selector: 'app-test-doc',
  templateUrl: './test-doc.component.html',
  styleUrls: ['./test-doc.component.css']
})
export class TestDocComponent implements OnInit {
  questions: Quest[];
  myForm:FormGroup;

 
  constructor(public form:FormBuilder, private dataservice: DataService, ) {
    this.myForm = form.group({});
    
   }

  ngOnInit(): void {

    
    this.dataservice.getQuest().subscribe((data: Quest[]) =>{
      this.questions = data;
      this.questions.forEach(q=> {
        this.myForm?.addControl(q.question, this.form.control(""));
      })
      
      
    });
    console.log("this is " +this.questions);
    
    


  }

  onSubmit(){
    console.log(this.myForm);


  }

}
