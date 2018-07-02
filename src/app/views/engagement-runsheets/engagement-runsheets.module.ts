import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EngagementRunsheetsRoutingModule } from './engagement-runsheets-routing.module';
import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';
import { EngagementRunsheetsListComponent } from './engagement-runsheets-list.component';
import { EngagementRunsheetsListItemComponent } from './engagement-runsheets-list-item.component';
import { EngagementRunsheetsDetailModalComponent } from './engagement-runsheets-detail-modal.component';
import { EngagementRunsheetsItemComponent } from './engagement-runsheets-item.component';

@NgModule({
  imports: [
    SharedModule,
    EngagementRunsheetsRoutingModule
  ],
  declarations: [
    EngagementRunsheetsCreateComponent,
    EngagementRunsheetsListComponent,
    EngagementRunsheetsListItemComponent,
    EngagementRunsheetsDetailModalComponent,
    EngagementRunsheetsItemComponent
  ],
  exports: [
    EngagementRunsheetsItemComponent
  ]
})
export class EngagementRunsheetsModule { }
