import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { FullNamePipePipe } from './pipes/full-name-pipe.pipe';
import { FontSizeDirectiveDirective } from './directives/font-size-directive.directive'


@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    FullNamePipePipe,
    FontSizeDirectiveDirective
  ],
  imports: [CommonModule],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormFieldValidationErrorsPipe,
    FullNamePipePipe,
    FontSizeDirectiveDirective,
    MatListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class SharedModule { }
