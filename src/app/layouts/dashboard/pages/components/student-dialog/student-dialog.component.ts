import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
export class StudentDialogComponent{
    studentForm:FormGroup;
    localidades:Localidad[];
    title:string;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any,private formBuilder:FormBuilder, private matDialogRef:MatDialogRef<StudentDialogComponent>){
      this.studentForm=this.formBuilder.group({
          name:['',[Validators.required,Validators.minLength(3),onlyLettersValidator]],
          lastName:['',[Validators.required,Validators.minLength(3),onlyLettersValidator]],
          birthDate:['',[Validators.required,dateValidator]],
          email:['',[Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
          Validators.required]],
          adreess:['',[Validators.required,Validators.minLength(5)]],
          localidad:['',[Validators.required]]
        }
      );
      this.localidades=data.localidades;
      if (data.editingStudent){
        this.title="Editar Alumno";
        this.studentForm.patchValue(data.editingStudent);
        if (this.studentForm.get('localidad')!=null){
          this.studentForm.get('localidad')?.patchValue(data.editingStudent.localidad.codigo);
        }
      }else{
        this.title="Crear Alumno";
      }
    }
    
    onSave():void{
      if (this.studentForm.invalid){
        this.studentForm.markAllAsTouched();
      }else{
        this.matDialogRef.close(this.studentForm.value);
      }
    }

    get nameControl() {
      return this.studentForm.get('name');
    }

    get lastNameControl() {
      return this.studentForm.get('lastName');
    }

    get birthDateControl() {
      return this.studentForm.get('birthDate');
    }

    get emailControl() {
      return this.studentForm.get('email');
    }

    get adreessControl() {
      return this.studentForm.get('adreess');
    }

    get localidadControl() {
      return this.studentForm.get('localidad');
    }
    
}
