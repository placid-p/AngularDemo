import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private http:HttpClient){}
  Onsubmit(data:any){
    this.http.post('http://localhost:8081/addperson',data)
    .subscribe((result)=>{
      console.warn(result);
    })
    console.warn(data);
  }
 

  ngOnInit(): void {
  }

}
