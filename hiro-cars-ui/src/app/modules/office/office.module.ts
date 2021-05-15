import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';

import { OfficeComponent } from './office.component';
import { DashboardComponent } from './../../components/office/dashboard/dashboard.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    OfficeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,

    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDividerModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatExpansionModule
  ]
})
export class OfficeModule { }
