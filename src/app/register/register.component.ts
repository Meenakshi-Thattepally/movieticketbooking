import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private router:Router)
{}
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
 
 
 
 
 
 // this.display()

  }
 // display()
  //{
//this.myid=localStorage.getItem('id')
 // }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //localStorage.getItem("show",this.profileForm.value)
    //let a=this.profileForm.value
    //console.warn(a);
    localStorage.setItem("values",JSON.stringify(this.profileForm.value))
    
  }

  //onSelectedname(name){
    //this.router.navigateByUrl('register/'+name)

  //}
}
