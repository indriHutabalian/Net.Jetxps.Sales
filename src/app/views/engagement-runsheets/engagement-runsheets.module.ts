import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EngagementRunsheetsRoutingModule } from './engagement-runsheets-routing.module';
import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';
import { EngagementRunsheetsListComponent } from './engagement-runsheets-list.component';
import { EngagementRunsheetsListItemComponent } from './engagement-runsheets-list-item.component';
import { EngagementRunsheetsDetailModalComponent } from './engagement-runsheets-detail-modal.component';
import { EngagementRunsheetsItemComponent } from './engagement-runsheets-item.component';
import { EngagementRunsheetsItemsActiveComponent } from './engagement-runsheets-items-active.component';
import { EngagementRunsheetsItemsRealizationComponent } from './engagement-runsheets-items-realization.component';

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
    EngagementRunsheetsItemComponent,
    EngagementRunsheetsItemsActiveComponent,
    EngagementRunsheetsItemsRealizationComponent
  ]
})
export class EngagementRunsheetsModule { }
