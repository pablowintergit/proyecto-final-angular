import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyLettersValidator } from '../../../../validators/onlyLettersValidator.validator';
import { ICourse, ITeacher } from '../../../../model';
import { MatDialogRef } from '@angular/material/dialog';
import { TeacherService } from '../../../../core/teacher.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent implements OnInit {
  courseForm:FormGroup;
  teachers:ITeacher[]=[];
  title:string;
  course?:ICourse;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
              private formBuilder:FormBuilder,
              private matDialogRef:MatDialogRef<CourseDialogComponent>,
              private teachersService:TeacherService
  ) { 
    this.courseForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),onlyLettersValidator]],
      description:['',[Validators.required,Validators.minLength(10)]],
      teacher:['',[Validators.required]]
    })
    if (data.course){
      this.title="Editar Curso";
      this.course=data.course;
    }else{
      this.title="Crear Curso";
    }
  }

  ngOnInit(): void {
    this.teachersService.getTeachers().subscribe({
      next:(teachers)=>this.teachers=teachers
    })
    if (this.course){
      this.courseForm.patchValue(this.course);
    }
  }

  compareTeacher(t1:ITeacher,t2:ITeacher): boolean{
    return t1 && t2 ? t1.id===t2.id : t1===t2;
  }
}
