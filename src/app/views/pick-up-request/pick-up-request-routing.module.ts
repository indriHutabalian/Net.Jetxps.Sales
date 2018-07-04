import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickUpRequestCreateComponent } from './pick-up-request-create.component';
import { PickUpRequestListComponent } from './pick-up-request-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: PickUpRequestCreateComponent,
    data: {
      title: 'Create Pick Up Request'
    }
  },
  {
    path: '',
    component: PickUpRequestListComponent,
    data: {
      title: 'Pick Up Request'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickUpRequestRoutingModule { }
