import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const myroute:Routes=[
  {
    path:"",
    component:AddpatientComponent
  },
  {
    path:"view",
    component:ViewpatientComponent
  },
  {
    path:"search",
    component:SearchpatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddpatientComponent,
    ViewpatientComponent,
    SearchpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
