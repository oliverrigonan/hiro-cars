import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './../../components/landing/home/home.component';
import { AboutComponent } from './../../components/landing/about/about.component';

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class LandingModule { }
