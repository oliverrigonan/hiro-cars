import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from './security.component';
import { LoginComponent } from './../../components/security/login/login.component';
import { RegisterComponent } from './../../components/security/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      { path: '', redirectTo: '/security/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
