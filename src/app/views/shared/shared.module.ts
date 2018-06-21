import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
  PaginationModule,
  ModalModule,
  BsDropdownModule
} from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule,
    BsDatepickerModule,
    PaginationModule,
    ModalModule
  ]
})
export class SharedModule { }
