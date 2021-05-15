import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'office', loadChildren: () => import('./modules/office/office.module').then(m => m.OfficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
