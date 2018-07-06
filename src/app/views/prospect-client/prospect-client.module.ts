import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProspectClientRoutingModule } from './prospect-client-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProspectClientRoutingModule
  ],
  declarations: []
})
export class ProspectClientModule { }
