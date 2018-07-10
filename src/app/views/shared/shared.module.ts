import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  BsDatepickerModule,
  PaginationModule,
  ModalModule,
  BsDropdownModule,
  AlertModule,
  TabsModule
} from 'ngx-bootstrap';

import { CardLoaderComponent } from './card-loader/card-loader.component';
import { DescriptionBlockComponent } from './description-block/description-block.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    CardLoaderComponent,
    DescriptionBlockComponent
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
    TabsModule,
    
    CardLoaderComponent,
    DescriptionBlockComponent
  ]
})
export class SharedModule { }
