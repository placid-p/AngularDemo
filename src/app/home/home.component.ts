import { Component, OnInit } from '@angular/core';
import { PlaceDataDisplayService } from '../services/place-data-display.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pls:any;
  constructor(private placedata:PlaceDataDisplayService) 
  {
    this.placedata.Getplaces().subscribe((data)=>{
      console.warn("data",data);
      this.pls=data;
    })
  }

  ngOnInit(): void {
  }

}
