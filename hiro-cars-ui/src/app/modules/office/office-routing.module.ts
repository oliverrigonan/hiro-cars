import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfficeComponent } from './office.component';
import { DashboardComponent } from './../../components/office/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: OfficeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
