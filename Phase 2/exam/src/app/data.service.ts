import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quest } from './data.model'
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(public http:HttpClient) { }

  getQuest(): Observable<Quest[]>{
    return this.http.get<Quest[]>('./assets/questions.json');
  }

  

  
}
