import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportSalesJetIdComponent } from './report-sales-jet-id.component';
import { ReportSalesEngagementComponent } from './report-sales-engagement.component';
import { ReportSalesJetIdCreatedComponent } from './report-sales-jet-id-created.component';
import { ReportJetIdRevenueComponent } from './report-jet-id-revenue.component';
import { RoleGuard } from '../../guards';

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
    canActivate: [RoleGuard],
    data: {
      title: 'Sales Created JET ID Report',
      expectedRoles: [
        'Sales Admin'
      ]
    }
  },
  {
    path: 'jet-id-revenue',
    component: ReportJetIdRevenueComponent,
    canActivate: [RoleGuard],
    data: {
      title: 'Sales JET ID Revenue',
      expectedRoles: [
        'Sales Admin'
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
