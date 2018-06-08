import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProspectClientsRoutingModule } from './prospect-clients-routing.module';
import { ProspectClientsListComponent } from './prospect-clients-list.component';
import { ProspectClientsUpsertComponent } from './prospect-clients-upsert.component';
import { ProspectClientsDetailComponent } from './prospect-clients-detail.component';

@NgModule({
  imports: [
    SharedModule,
    ProspectClientsRoutingModule
  ],
  declarations: [
    ProspectClientsListComponent,
    ProspectClientsUpsertComponent,
    ProspectClientsDetailComponent
  ],
  entryComponents: [
    ProspectClientsUpsertComponent,
    ProspectClientsDetailComponent
  ]
})
export class ProspectClientsModule { }
