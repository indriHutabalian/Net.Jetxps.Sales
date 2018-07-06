import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';
import { EngagementRunsheetsListComponent } from './engagement-runsheets-list.component';
import { EngagementRunsheetsDetailModalComponent } from './engagement-runsheets-detail-modal.component';
import { EngagementRunsheetsItemsActiveComponent } from './engagement-runsheets-items-active.component';
import { EngagementRunsheetsItemsRealizationComponent } from './engagement-runsheets-items-realization.component';

const routes: Routes = [
  {
    path: 'create',
    component: EngagementRunsheetsCreateComponent,
    data: {
      title: 'Create Engagement Runsheet'
    }
  },
  {
    path: 'active',
    component: EngagementRunsheetsItemsActiveComponent,
    data: {
      title: 'Engaging Prospect Clients'
    },

    children: [
      {
        path: ':code/realization/:prospectClientCode',
        component: EngagementRunsheetsItemsRealizationComponent,
        data: {
          title: 'Realization'
        }
      }
    ]
  },
  {
    path: 'list',
    component: EngagementRunsheetsListComponent,
    data: {
      title: 'Engagement Runsheet'
    },
    children: [
      {
        path: ':code',
        component: EngagementRunsheetsDetailModalComponent,
        data: {
          title: 'Detail'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementRunsheetsRoutingModule { }
