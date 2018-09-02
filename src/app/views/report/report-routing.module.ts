import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';
import { ReportSalesEngagementComponent } from './report-sales-engagement.component';
import { ReportSalesJetIdCreatedComponent } from './report-sales-jet-id-created.component';
import { ReportJetIdRevenueComponent } from './report-jet-id-revenue.component';

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
  },
  {
    path: 'sales-jet-id-created',
    component: ReportSalesJetIdCreatedComponent,
    data: {
      title: 'Sales Created JET ID Report'
    }
  },
  {
    path: 'jet-id-revenue',
    component: ReportJetIdRevenueComponent,
    data: {
      title: 'Sales JET ID Revenue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
