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
        this.myForm?.addControl(q.qNum, this.form.control(""));
      })
      
      
    });
    console.log("this is " +this.questions);
    
    


  }

  onSubmit(){
    //console.log(this.myForm);
    //console.log(this.myForm.value);
    let total:number=0;
    //console.log(this.questions[0].qNum)
    for(let i = 0; i < 10; i ++){ 
     console.log( this.questions[i].cA)
     console.log(this.myForm.value);
      if(this.myForm.value == this.questions[0].cA){
        total++;
         console.log(total);

      }
    }
    //console.log(total);
    
    


  }

}
