import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {

  patientName=""
  doctorName=""
  date=""
  patientNumber=""

  constructor(private api:ApiService){}

  read=()=>{
    let data:any={"patientName":this.patientName,"doctorName":this.doctorName,"date":this.date,"patientNumber":this.patientNumber}
    console.log(data)

    this.api.addpatient(data).subscribe(

      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Patient added successfully")
          this.patientName=""
          this.doctorName=""
          this.date=""
          this.patientNumber=""
        }
        else{
          alert("Something Went Wrong")
        }
      }

    )

  }

}
