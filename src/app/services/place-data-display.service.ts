import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceDataDisplayService {

  constructor(private http:HttpClient) { }
  Getplaces(){
    return this.http.get("http://localhost:8081/home");
  }
}
