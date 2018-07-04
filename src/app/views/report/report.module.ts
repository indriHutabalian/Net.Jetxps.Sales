import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReportRoutingModule } from './report-routing.module';
import { ReportSalesEngagementComponent } from './report-sales-engagement.component';
import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';

@NgModule({
  imports: [
    SharedModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportSalesJetIdComponent,
    ReportSalesEngagementComponent,
  ]
})
export class ReportModule { }
