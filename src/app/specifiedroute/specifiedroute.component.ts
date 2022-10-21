import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { buff } from '../models/mve.model';

@Component({
  selector: 'app-specifiedroute',
  templateUrl: './specifiedroute.component.html',
  styleUrls: ['./specifiedroute.component.css']
})
export class SpecifiedrouteComponent implements OnInit {

  //mveobj:"";
  mveobj!: string;
  type='';
  id='';
  url='';
  movies:any;
  movie:any;


constructor(private router:Router,private root:ActivatedRoute,private ds:DataService,private http:HttpClient)
{}
//mves:buff[]=[]
 

  title='localStorage';
  myid!:any;
  profileForm!:any;
  ngOnInit(){
  this.profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    movieName:new FormControl(''),
    nooftickets:new FormControl(''),
    showtime: new FormControl(''),
  });

this.type=this.root.snapshot.params['type'];
this.id=this.root.snapshot.params['id'];
this.url='https://6328cb014c626ff832b7231c.mockapi.io/food';
this.getmovie();


  }
  getmovie(){
    this.ds.getproddata().subscribe((res)=>{
      this.movies=res;
      let index=this.movies.findIndex((movie:{id:string})=>movie.id==this.id)
      console.log("har",index,this.movies[index].name);
      

    })

  }


  
  display()
  {
this.myid=localStorage.getItem('id')
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //localStorage.getItem("show",this.profileForm.value)
    //let a=this.profileForm.value
    //console.warn(a);
    localStorage.setItem("values",JSON.stringify(this.profileForm.value))
  }

  onSelectedname(name: string){
    this.router.navigateByUrl('register/'+name)

  //}


}


}



