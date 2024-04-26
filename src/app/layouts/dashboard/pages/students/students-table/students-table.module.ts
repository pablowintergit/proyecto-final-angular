import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsTableComponent } from './students-table.component';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentsTableComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsTableComponent,
    StudentDialogComponent
  ]
})
export class StudentsModule { }
