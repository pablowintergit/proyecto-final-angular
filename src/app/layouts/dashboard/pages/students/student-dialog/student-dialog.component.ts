import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { onlyLettersValidator } from '../../../../../validators/onlyLettersValidator.validator';
import { dateValidator } from '../../../../../validators/dateValidator.validator';
import { MatDialogRef } from '@angular/material/dialog';
import { IStudent, Localidad } from '../../../../../model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalidadService } from '../../../../../core/localidad.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent implements OnInit{
    studentForm:FormGroup;
    localidades:Localidad[]=[];
    title:string;
    student?:IStudent;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any,private formBuilder:FormBuilder, 
                        private matDialogRef:MatDialogRef<StudentDialogComponent>,
                        private localidadService:LocalidadService){
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
      if (data.student){
        this.title="Editar Alumno";
        this.student=data.student;
      }else{
        this.title="Crear Alumno";
      }
    }
    
    ngOnInit(): void {
      this.getLocalidades();
      if (this.student){
        this.studentForm.patchValue(this.student);
      }
    }

    getLocalidades():void{
      this.localidadService.getLocalidades().subscribe({
        next:(localidades)=>this.localidades=localidades
      })
    }

    compareLocalidad(l1:Localidad,l2:Localidad):boolean{
      return l1 && l2 ? l1.codigo===l2.codigo : l1===l2;
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
