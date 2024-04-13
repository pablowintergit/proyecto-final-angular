import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { StudentsTableComponent } from '../components/students-table/students-table.component';

@NgModule({
  declarations: [
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatDialogModule
  ],
  exports:[StudentsTableComponent]
})
export class StudentsModule { }
