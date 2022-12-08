import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  fetchpatient=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addpatient=(datasend:any)=>{
    return this.http.post("http://localhost:8080/add",datasend)
  }

  searchpat=(datasearch:any)=>{
    return this.http.post("http://localhost:8080/search",datasearch)
  }

  deletepat=(deletedata:any)=>{
    return this.http.post("http://localhost:8080/delete",deletedata)
  }
}
