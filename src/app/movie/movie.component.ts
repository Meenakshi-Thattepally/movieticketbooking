import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { NgIfContext } from '@angular/common';
import { userdet } from '../utilities/userd';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  storapi=new userdet('','',0,'')

 show:boolean=false
 status:boolean=false
  myForm: any;
  dataservice: any;
  type="";
  id='';
  url='';
  movies:any;
  movie:any;
updatetickets: number=0;
checkkk:any;
user:any;
 

x=[]
 

  constructor(private route:ActivatedRoute, private hp:HttpClient,private hs:DataService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {

    
    this.id=this.route.snapshot.params['id'];
   // this.url='https://6328cb014c626ff832b7231c.mockapi.io/food'
    //this.getmovie();

    this.hs.getproddata().subscribe((res)=>
    {
      this.movies=res;
      //console.log("all",this.movies)
     
      let index =this.movies.findIndex((movie:{id : string}) =>movie.id == this.id);
       
       
      this.movie = this.movies[index];
      console.log("chek",this.movie) 
   
    })
  }
  
  addmvedetails(myForm:NgForm,idd:any){

   // console.log('booking',myForm.value,idd);
    console.log('dis tickets',this.movie.availtickets);
        console.log('buying tickets',myForm.value.nooftickets);


        if(myForm.value.nooftickets<=this.movie.availtickets){
        this.movie.availtickets  = (this.movie.availtickets)-(myForm.value.nooftickets);
        console.log(this.movie.availtickets)
        this.snackbar.open("booked Successful", "OK", {
          duration: 3000,
          panelClass: ['green-snackbar', 'booked-snackbar'],
         });
        
       
      this.show=true
    this.status=false
  
  }
        else{
          this.status=true;
          this.show=false;
     
       
        console.log(myForm.value.nooftickets)
        }
     
       const newmd =  { 
          moviename:this.movie.moviename,
          image:this.movie.image,
          availtickets:this.movie.availtickets,
          id:idd,
          };
          
  
          this.hs.update(idd,newmd).subscribe((data)=>{
            console.log(data)
          },(err)=>{
            console.log("err",err)
          }
          
      );
 
      
      
      let ud={username:myForm.value.username,
          moviename:myForm.value.moviename,
          showtime:myForm.value.showtime ,
          nooftickets:myForm.value.nooftickets}
     this.storapi=ud;
     console.log("gg",this.storapi)
      this.adduser(ud)
      this.hs.callingapi(this.storapi).subscribe((data)=>{
        console.log(data)
      })




    
  }
  adduser(ud:any){
    console.log(ud)
    let  manyusers=[]
      if(localStorage.getItem('Users')!==null){
        manyusers=JSON.parse(localStorage.getItem('Users') || '{}')
        manyusers=[ud,...manyusers]
       }
       else{
        manyusers=[ud]
         
       }

       localStorage.setItem('Users',JSON.stringify(manyusers))
     let   x=(localStorage.getItem('Users'))
     console.log("stored data",x)

  }

  

}

     
    
        
          

        
 







