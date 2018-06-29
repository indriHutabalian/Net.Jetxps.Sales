import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ProspectClientsRoutingModule } from './prospect-clients-routing.module';
import { ProspectClientsListComponent } from './prospect-clients-list.component';
import { ProspectClientsUpsertComponent } from './prospect-clients-upsert.component';
import { ProspectClientsDetailComponent } from './prospect-clients-detail.component';
import { ProspectClientsSearchModalComponent } from './prospect-clients-search-modal.component';
import { ProspectClientsListItemComponent } from './prospect-clients-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    ProspectClientsRoutingModule
  ],
  declarations: [
    ProspectClientsListComponent,
    ProspectClientsUpsertComponent,
    ProspectClientsDetailComponent,
    ProspectClientsSearchModalComponent,
    ProspectClientsListItemComponent,
  ],
  entryComponents: [
    ProspectClientsUpsertComponent,
    ProspectClientsDetailComponent,
    ProspectClientsSearchModalComponent,
    ProspectClientsListItemComponent,
  ],
  exports: [
  ]
})
export class ProspectClientsModule { }
