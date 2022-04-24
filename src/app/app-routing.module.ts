import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointementComponent } from './component/appointement/appointement.component';
import { AppointmmentBookComponent } from './component/appointmment-book/appointmment-book.component';
import { AppointmmentListComponent } from './component/appointmment-list/appointmment-list.component';


const routes: Routes = [
  { path: 'appointement-slot', component: AppointementComponent },
  { path: '', component: AppointementComponent },
  { path: 'appointement-create', component: AppointmmentBookComponent },
  { path: 'appointement-list', component: AppointmmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
