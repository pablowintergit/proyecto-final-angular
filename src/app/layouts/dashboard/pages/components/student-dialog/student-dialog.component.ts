import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyLettersValidator } from '../../../../../validators/onlyLettersValidator.validator';
import { dateValidator } from '../../../../../validators/dateValidator.validator';
import { MatDialogRef } from '@angular/material/dialog';
import { Localidad } from '../../../../../model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {
    studentForm:FormGroup;
    
    localidades:Localidad[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder:FormBuilder, private matDialogRef:MatDialogRef<StudentDialogComponent>){
      this.studentForm=this.formBuilder.group({
          name:['',[Validators.required,onlyLettersValidator]],
          lastName:['',[Validators.required,onlyLettersValidator]],
          birthDate:['',[Validators.required,dateValidator]],
          email:['',[Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
          Validators.required]],
          adreess:['',[Validators.required]],
          localidad:['',[Validators.required,onlyLettersValidator]]
        }
      );
      this.localidades=data.localidades;
    }

    onSave():void{
      if (this.studentForm.invalid){
        this.studentForm.markAllAsTouched();
      }else{
        this.matDialogRef.close(this.studentForm.value);
      }
    }

}
