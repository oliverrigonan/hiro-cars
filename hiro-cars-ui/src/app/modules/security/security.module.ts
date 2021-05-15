import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { SecurityComponent } from './security.component';
import { LoginComponent } from './../../components/security/login/login.component';
import { RegisterComponent } from './../../components/security/register/register.component';

@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class SecurityModule { }
