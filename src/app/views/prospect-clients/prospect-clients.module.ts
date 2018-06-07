import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProspectClientsRoutingModule } from './prospect-clients-routing.module';
import { ProspectClientsListComponent } from './prospect-clients-list.component';

@NgModule({
  imports: [
    SharedModule,
    ProspectClientsRoutingModule
  ],
  declarations: [
    ProspectClientsListComponent
  ]
})
export class ProspectClientsModule { }
