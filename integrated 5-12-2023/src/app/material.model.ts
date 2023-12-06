import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatDialogModule,
        MatListModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSnackBarModule,
        MatTabsModule,
        MatProgressBarModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule
    ]
})
export class MaterialModel {

}