import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';
import { ReportSalesEngagementComponent } from './report-sales-engagement.component';

const routes: Routes = [
  {
    path: 'sales-jet-id',
    component: ReportSalesJetIdComponent,
    data: {
      title: 'Sales JET ID Report'
    }
  },
  {
    path: 'sales-engagement',
    component: ReportSalesEngagementComponent,
    data: {
      title: 'Sales Engagement Report'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
