import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TaskRoutingModule } from './task-routing.module';
import { TaskActiveComponent } from './task-active.component';
import { TaskRealizationComponent } from './task-realization.component';
import { EngagementRunsheetsModule } from '../engagement-runsheets/engagement-runsheets.module';

@NgModule({
  imports: [
    SharedModule,
    // EngagementRunsheetsModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskActiveComponent,
    TaskRealizationComponent
  ]
})
export class TaskModule { }
