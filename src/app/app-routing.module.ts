import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';
import { SpecifiedrouteComponent } from './specifiedroute/specifiedroute.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'',component:RegisterComponent},

{path:'movie/:id',component:MovieComponent},

{path:'bookings',component:DisplaytableComponent},
// {path:'dailog',component:DialogComponent},
// {path:'editdetails',component:EditdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
