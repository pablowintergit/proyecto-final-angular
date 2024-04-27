import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClass, ICourse, IStudent } from '../../../../model';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-classe-dialog',
  templateUrl: './classe-dialog.component.html',
  styleUrl: './classe-dialog.component.scss'
})
export class ClasseDialogComponent {
  clazzForm:FormGroup;
  students:IStudent[]=[];
  course:ICourse[]=[];
  title:string;
  clazz?:IClass;
  
  //TODO:FALTA INJECTAR EL SERVICIO DE CURSOS Y ALUMNOS
  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
              private formBuilder:FormBuilder,
              private coursesService:CoursesService,
              private matDialogRef:MatDialogRef<ClasseDialogComponent>
  ) { 
    this.clazzForm=this.formBuilder.group({
      course:['',[Validators.required]],
      shedule:['',[Validators.required,Validators.minLength(10)]],
      student:['',[Validators.required]],
      fecha:['',[Validators.required]]
    })

    if (data.clazz){
      this.title="Editar Clase";
      this.clazz=data.clazz;
    }else{
      this.title="Registrar Clase";
    }
  }

  ngOnInit(): void {
    
    if (this.clazz){
      this.clazzForm.patchValue(this.clazz);
    }
  }

  getCourses(): void{
    this.coursesService.getCourses().subscribe(courses => {
      this.course = courses;
    })
  }



  compareStudent(s1:IStudent,s2:IStudent): boolean{
    return s1 && s2 ? s1.id===s2.id : s1===s2;
  }

  get courseControl() {
    return this.clazzForm.get('course');
  }

  get sheduleControl() {
    return this.clazzForm.get('shedule');
  }

  get studentControl() {
    return this.clazzForm.get('student');
  }

  get fechaControl() {
    return this.clazzForm.get('fecha');
  }
  onSave(): void{
    if (this.clazzForm.invalid){
      this.clazzForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.clazzForm.value);
    }
  }
}
