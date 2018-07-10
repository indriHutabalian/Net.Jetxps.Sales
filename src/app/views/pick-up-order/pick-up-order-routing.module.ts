import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickUpOrderCreateComponent } from './pick-up-order-create.component';
import { PickUpOrderListComponent } from './pick-up-order-list.component';
import { PickUpOrderDetailModalComponent } from './pick-up-order-detail-modal.component';

const routes: Routes = [
  {
    path: 'list',
    component: PickUpOrderListComponent,
    data: {
      title: 'Pick Up Order'
    },
    children: [
      {
        path: ':code',
        component: PickUpOrderDetailModalComponent,
        data: {
          title: 'Detail'
        }
      }
    ]
  },
  {
    path: 'create',
    component: PickUpOrderCreateComponent,
    data: {
      title: 'Create Pick Up Order'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickUpOrderRoutingModule { }
