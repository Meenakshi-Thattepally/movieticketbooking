
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { userdet } from '../utilities/userd';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog,MAT_DIALOG_DATA,MatDialogRef} from'@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EditdetailsComponent } from '../editdetails/editdetails.component';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {
  userdata:any[]=[];
  displayedColumns: string[] = ['username', 'moviename', 'showtime',"nooftickets", "action" ];
  dataSource!:MatTableDataSource<any>
   @ViewChild(MatPaginator)paginator!:MatPaginator
  @ViewChild(MatSort)sort!:MatSort
 

  constructor(private hs:DataService,private dialog:MatDialog ,private router:Router,private ac :ActivatedRoute){ }

  ngOnInit(): void {
    this.hs.getapidata().subscribe((res)=>
    {
      this.userdata=res
      
      this.dataSource=new MatTableDataSource(res);
      console.log("kkll",this.dataSource)
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort

     
      console.log("got it", this.userdata)
    })
   // console.log("mana",this.editdata)
  }



  Opendialog(row :any) {
    this.dialog.open( EditdetailsComponent, {
      width: '70%',
      height:'80%',
      
     
      data:row
     
    });
  }

deleteitem(id:number){
  this.hs.deleteitem(id)
  .subscribe({next:(res)=>{alert("deleted successfully")}})}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
  // Opendialog (row:any){
  //  //this.router.navigate(['editdetails']);
  // }




  

  // deleteitem(id:number){
  //   this.hs.deleteitem(id).subscribe({
  //     next:(res)=>{
  //       alert("deleted successfully")
  //     }
  //   })
  // }


// //  this.dialog.open(DisplayComponentDialog,
// //     {
// //       width: '50%',
// //       height: '300px',
      
    
// //   data:row
// });
// }



 


