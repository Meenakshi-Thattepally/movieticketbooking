import { Component, Input,OnInit } from '@angular/core';
import { buff } from '../models/mve.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mvedetails',
  templateUrl: './mvedetails.component.html',
  styleUrls: ['./mvedetails.component.css']
})
export class MvedetailsComponent  {
 
  @Input() movie:buff={id:0,moviename:"",stars:"",image:"",availtickets:0};
  
constructor(private router:Router){}
  watchmve(name:any)
  {
//this.router.navigate(['/register']);
this.router.navigateByUrl('home/'+name)
this.gotomovie(this.movie.id)
  }

  gotomovie(id:number){
    this.router.navigate(['movie',id]);
   
  }
}


