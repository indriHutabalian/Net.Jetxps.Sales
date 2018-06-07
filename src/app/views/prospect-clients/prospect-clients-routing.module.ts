import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectClientsListComponent } from './prospect-clients-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProspectClientsListComponent,
    data: {
      title: 'Prospect Clients'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectClientsRoutingModule { }
