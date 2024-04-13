import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { StudentsTableComponent } from '../components/students-table/students-table.component';
import { StudentDialogComponent } from '../components/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    StudentsTableComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatDialogModule
  ],
  exports:[StudentsTableComponent,StudentDialogComponent]
})
export class StudentsModule { }
