import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EngagementRunsheetsRoutingModule } from './engagement-runsheets-routing.module';
import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';

@NgModule({
  imports: [
    SharedModule,
    EngagementRunsheetsRoutingModule
  ],
  declarations: [EngagementRunsheetsCreateComponent]
})
export class EngagementRunsheetsModule { }
