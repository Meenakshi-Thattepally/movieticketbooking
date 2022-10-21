import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MvedetailsComponent } from './mvedetails/mvedetails.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SpecifiedrouteComponent } from './specifiedroute/specifiedroute.component';
import { MovieComponent } from './movie/movie.component';

import { TableComponent } from './table/table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TrailComponent } from './trail/trail.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MvedetailsComponent,
    RegisterComponent,
    SpecifiedrouteComponent,
    MovieComponent,
 
    TableComponent,
    UpdatedetailsComponent,
    EditdetailsComponent,
    DisplaytableComponent,
    TrailComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,MatTableModule,BrowserAnimationsModule, 
    MatButtonModule,MatDialogModule,MatIconModule, MatSortModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,ReactiveFormsModule,FormsModule,MatPaginatorModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
