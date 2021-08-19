import { Component, OnInit } from '@angular/core';

export interface task {
  empID:string;
  name:string;
  task:string;
  deadline:string;
}

var dataTable:task[];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['empID', 'name', 'task', 'deadline'];
  dataSource: typeof dataTable;

  

  constructor() { }

  updateTable(){
    let taskArrayJSON = localStorage.getItem("taskarray");
    if (taskArrayJSON != null){
       dataTable = JSON.parse(taskArrayJSON);
       
    }
    
    console.log("table updated");
    this.dataSource = dataTable;
    console.log(this.dataSource);
  }



  ngOnInit(): void { 
  }

}
