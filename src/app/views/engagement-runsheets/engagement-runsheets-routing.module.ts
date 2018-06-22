import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngagementRunsheetsCreateComponent } from './engagement-runsheets-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: EngagementRunsheetsCreateComponent,
    data: {
      title: 'Create Engagement Runsheet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementRunsheetsRoutingModule { }
