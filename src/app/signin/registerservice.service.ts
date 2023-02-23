import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registerclass} from './registerclass'

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  url='http://localhost:3000/'
  constructor(private http:HttpClient){}
  createaccount(registerobj1:Registerclass):Observable<Registerclass>{
   
    return this.http.post<Registerclass>(this.url+'api/signin',registerobj1)  
  }
  
}
