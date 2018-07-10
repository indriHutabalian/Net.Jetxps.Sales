import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PickUpOrderRoutingModule } from './pick-up-order-routing.module';
import { PickUpOrderCreateComponent } from './pick-up-order-create.component';
import { PickUpOrderListComponent } from './pick-up-order-list.component';
import { PickUpOrderDetailModalComponent } from './pick-up-order-detail-modal.component';

@NgModule({
  imports: [
    SharedModule,
    PickUpOrderRoutingModule
  ],
  declarations: [
    PickUpOrderCreateComponent,
    PickUpOrderListComponent,
    PickUpOrderDetailModalComponent
  ]
})
export class PickUpOrderModule { }
