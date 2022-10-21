
// import { Component, Inject, OnInit, ViewChild } from '@angular/core';
// import { DataService } from '../data.service';
// import { userdet } from '../utilities/userd';
// import {MatDialog} from'@angular/material/dialog';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { EditdetailsComponent } from '../editdetails/editdetails.component';
// import { MatTableDataSource } from '@angular/material/table';


// @Component({
//   selector: 'app-bookings',
//   templateUrl: './bookings.component.html',
//   styleUrls: ['./bookings.component.css'],
  
// })
// export class BookingsComponent implements OnInit {
 
//   userdata:any[]=[]

//   displayedColumns = ['username', 'moviename', 'showtime',"nooftickets", "delete","edit" ];



//   constructor(private hs:DataService, private mt:MatDialog){ }

//   ngOnInit(): void {
//     this.hs.getapidata().subscribe((res)=>
//     {
//       this.userdata=res
     
//       console.log("got it", this.userdata)
//     })
//    // console.log("mana",this.editdata)
//   }

// //  togetedit(element:any){
// //   this.mt.open(DialogComponent, {
// //     // height: '400px',
// //     width: '50%',
// //     data:element
// //   });
// //  }

// openDialog(row:any) {
//   this.mt.open(EditdetailsComponent,
//     {
//   data:row
// });
// }



// }