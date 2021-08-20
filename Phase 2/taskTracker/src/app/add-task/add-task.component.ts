import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() updateTable = new EventEmitter<any>();
  

  newTaskGroup = new FormGroup({
    empID : new FormControl(''),
    name : new FormControl(''),
    task : new FormControl(''),
    deadline: new FormControl('')
  });
   




  constructor() { }

  addTask(){
    let taskArrayJSON = localStorage.getItem("taskarray");
    let taskArray = []
    if (taskArrayJSON != null){
     taskArray = JSON.parse(taskArrayJSON);
    }else{
      
    }
    taskArray.push(this.newTaskGroup.value);
    taskArrayJSON = JSON.stringify(taskArray);
    localStorage.setItem("taskarray", taskArrayJSON)
    this.updateTable.emit();

  }

  ngOnInit(): void {
    
  }

}
