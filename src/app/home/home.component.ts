import { Component, OnInit } from '@angular/core';
import { buff } from '../models/mve.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 mves:buff[]=[]

  constructor(private dsobj:DataService){

  }
  ngOnInit()
  {
   //this.mves= this.dsobj.getproddata();
   this.dsobj.getproddata().subscribe(
    data=>{this.mves=data},
   
   )
  }


  

}
