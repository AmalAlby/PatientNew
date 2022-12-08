import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {

  data:any=[]

  constructor(private api:ApiService){
    api.fetchpatient().subscribe(

      (response)=>{
        this.data=response
      }

    )
  }

}
