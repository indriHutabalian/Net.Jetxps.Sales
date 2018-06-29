import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
  PaginationModule,
  ModalModule,
  BsDropdownModule,
  AlertModule
} from 'ngx-bootstrap';
import { CardLoaderComponent } from './card-loader/card-loader.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    CardLoaderComponent
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule,
    BsDatepickerModule,
    PaginationModule,
    ModalModule,
    AlertModule,
    
    CardLoaderComponent
  ]
})
export class SharedModule { }
