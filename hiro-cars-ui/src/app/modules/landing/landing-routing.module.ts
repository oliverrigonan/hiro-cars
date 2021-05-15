import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './../../components/landing/home/home.component';
import { AboutComponent } from './../../components/landing/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
