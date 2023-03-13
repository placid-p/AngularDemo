import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../signin/registerservice.service'
import {Userloginfo} from './userlogininfo';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message:string;
  status:string;
  constructor(private loginobj:RegisterserviceService) { }
  Onsubmit(data1:Userloginfo){
    console.warn(data1)
    this.userlogin(data1)
  }
  userlogin(datacame:Userloginfo){
    this.loginobj.userlogin(datacame).subscribe(
      (resResult) => {
        let resp=JSON.stringify(resResult);
        console.log("hi");
        console.log(resp);
        console.warn(resResult);
        // this.message= resResult['msg'];
        // this.status = resResult['status'];
        // if(resResult['status']=='success'){
        //   localStorage.setItem('Loginuser',resp)
        // }
        // else{
        //   localStorage.removeItem('Loginuser');
        // }

      }
    )

  }
  ngOnInit(): void {
  }

  

}
