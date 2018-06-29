import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskActiveComponent } from './task-active.component';
import { TaskRealizationComponent } from './task-realization.component';

const routes: Routes = [
  {
    path: 'active',
    component: TaskActiveComponent,
    data: {
      title: 'Engaging Prospect Clients'
    },

    children: [
      {
        path: ':code/realization/:prospectClientCode',
        component: TaskRealizationComponent,
        data: {
          title: 'Realization'
        }
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
