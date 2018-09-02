import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportSalesEngagementComponent } from './report-sales-engagement.component';
import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';
import { ReportSalesEngagementDetailModalComponent } from './report-sales-engagement-detail-modal.component';
import { EngagementRunsheetsModule } from '../engagement-runsheets/engagement-runsheets.module';
import { ReportSalesJetIdCreatedComponent } from './report-sales-jet-id-created.component';
import { ReportJetIdRevenueComponent } from './report-jet-id-revenue.component';

@NgModule({
  imports: [
    SharedModule,
    ReportRoutingModule,
    EngagementRunsheetsModule
  ],
  declarations: [
    ReportSalesJetIdComponent,
    ReportSalesEngagementComponent,
    ReportSalesEngagementDetailModalComponent,
    ReportSalesJetIdCreatedComponent,
    ReportJetIdRevenueComponent
  ],
  entryComponents: [
    ReportSalesEngagementDetailModalComponent
  ]
})
export class ReportModule { }
