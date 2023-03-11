import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { RegisterserviceService } from './registerservice.service';
import {Registerclass} from './registerclass'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isValidFormSubmitted = false;
  emailpattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  form1={
    Name:'',
    Email:'',
    Password:'',
  };
  message:string="";
  constructor(private regobj:RegisterserviceService){}
  Onsubmit(data:Registerclass){
    console.warn(data);
    this.createAccount(data);

    this.isValidFormSubmitted = true;
    
  }
 createAccount(registerobj1:Registerclass){

  this.regobj.createaccount(registerobj1).subscribe(
    () => {
      console.log(registerobj1);
      this.message="user created";
      console.log(this.message);
    }
  )
 }

  ngOnInit(): void {
  }

}
