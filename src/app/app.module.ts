import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointementComponent } from './component/appointement/appointement.component';
import { addSlotModalcomponent } from './component/appointement/appointement.component';

import { RouterModule } from '@angular/router';
import {
  MatCardModule,
} from '@angular/material/card';
import { MatGridListModule, } from '@angular/material/grid-list';
import { MatIconModule, } from '@angular/material/icon';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/core/auth.interceptor';
import { CrudService } from 'src/app/services/crud.service';
import { AppointmmentBookComponent } from './component/appointmment-book/appointmment-book.component';
import { AppointmmentListComponent } from './component/appointmment-list/appointmment-list.component';





@NgModule({
  declarations: [
    AppComponent,
    AppointementComponent,
    addSlotModalcomponent,
    AppointmmentBookComponent,
    AppointmmentListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    TimepickerModule.forRoot(),

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule  ,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
