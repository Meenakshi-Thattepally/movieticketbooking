import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA,MatDialogRef} from'@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { DisplaytableComponent } from '../displaytable/displaytable.component';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent  {


userdata!:FormGroup;

  constructor(private formBuilder:FormBuilder,private dialog:MatDialog,private hs:DataService, @Inject(MAT_DIALOG_DATA)public editdata:any,   private dialogRef:MatDialogRef<EditdetailsComponent>) { }
 
actionbtn:string="Save"


  ngOnInit(): void {

    this.userdata=this.formBuilder.group({
      username:['',Validators.required],
      moviename:['',Validators.required],
      showtime:['',Validators.required],
      nooftickets:['',Validators.required],

    })
//console.log("manam",this.editdata)
if(this.editdata){
  this.actionbtn="Update";
  this.userdata.controls['username'].setValue(this.editdata.username)
  this.userdata.controls['moviename'].setValue(this.editdata.moviename)
  this.userdata.controls['showtime'].setValue(this.editdata.showtime)
  this.userdata.controls['nooftickets'].setValue(this.editdata.nooftickets)
}


  }

  update(){
    this.userdata.value
  }
  editdata1(){
   
        this.ud()
   
    }
  

  ud(){
    this.hs.puteditdata(this.userdata.value,this.editdata.id).subscribe({
      next:(res)=>{
        alert("updated successfully");
        this.userdata.reset();
        this.dialogRef.close('update');
      }
    })
  }


  // deleteitem(id:number){
  //   this.hs.deleteitem(id).subscribe({
  //     next:(res)=>{
  //       alert("deleted successfully")
  //     }
  //   })
  // }

}



