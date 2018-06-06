import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
  PaginationModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule,
    PaginationModule
  ]
})
export class SharedModule { }
