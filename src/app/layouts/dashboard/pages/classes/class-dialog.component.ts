import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClass, ICourse, IStudent } from '../../../../model';
import { CoursesService } from '../courses/courses.service';
import { StudentsService } from '../students/students-table/students.service';

@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrl: './class-dialog.component.scss'
})
export class ClassDialogComponent {
  clazzForm:FormGroup;
  students:IStudent[]=[];
  courses:ICourse[]=[];
  title:string;
  clazz?:IClass;
  

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
              private formBuilder:FormBuilder,
              private coursesService:CoursesService,
              private studentService:StudentsService,
              private matDialogRef:MatDialogRef<ClasseDialogComponent>
  ) { 
    this.clazzForm=this.formBuilder.group({
      course:['',[Validators.required]],
      schedule:['',[Validators.required,Validators.minLength(10)]],
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
    this.getCourses();
    this.getStudents();

    if (this.clazz){
      this.clazzForm.patchValue(this.clazz);
    }
  }

  getCourses(): void{
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    })
  }

  getStudents(): void{
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    })
  }

  compareStudent(s1:IStudent,s2:IStudent): boolean{
    return s1 && s2 ? s1.id===s2.id : s1===s2;
  }

  compareCourse(c1:ICourse,c2:ICourse): boolean{
    return c1 && c2 ? c1.id===c2.id : c1===c2;
  }

  get courseControl() {
    return this.clazzForm.get('course');
  }

  get scheduleControl() {
    return this.clazzForm.get('schedule');
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
