import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PickUpRequestRoutingModule } from './pick-up-request-routing.module';
import { PickUpRequestCreateComponent } from './pick-up-request-create.component';
import { PickUpRequestListComponent } from './pick-up-request-list.component';

@NgModule({
  imports: [
    SharedModule,
    PickUpRequestRoutingModule
  ],
  declarations: [
    PickUpRequestCreateComponent,
    PickUpRequestListComponent
  ]
})
export class PickUpRequestModule { }
