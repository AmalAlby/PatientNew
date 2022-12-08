import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css']
})
export class SearchpatientComponent {

  patientNumber=""
  searchdata:any=[]

  constructor(private api:ApiService,private route:Router){}

  read=()=>{
    let data={"patientNumber":this.patientNumber}
    console.log(data)
    this.api.searchpat(data).subscribe(
      (response:any)=>{
        console.log(response)

        if(response.length==0){
          alert("Invalid Patient Number")
          this.patientNumber=""
        }
        else{
          this.searchdata=response
        }

      }
    )
  }

  deletepat=(patid:any)=>{
    
    let data:any={"id":patid}
    this.api.deletepat(data).subscribe(
      (generate:any)=>{
        console.log(generate)
        if(generate.status=="success"){
          alert("Deleted Successfully")
          this.patientNumber=""
          this.route.navigate(["/search"])
          this.searchdata=[]
        }
        else{
          alert("Invalid Input")
        }
      }
    )

  }

}
