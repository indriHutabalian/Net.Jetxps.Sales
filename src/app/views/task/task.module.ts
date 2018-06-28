import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TaskRoutingModule } from './task-routing.module';
import { TaskActiveComponent } from './task-active.component';
import { TaskRealizationComponent } from './task-realization.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskActiveComponent,
    TaskRealizationComponent
  ]
})
export class TaskModule { }
