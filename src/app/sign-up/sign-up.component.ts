import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupdatapush(data:any){
    alert(data.pname)
    alert(data.pemail)
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
