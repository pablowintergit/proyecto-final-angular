import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from '../../../../../model';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { Localidad, ILocalidad } from '../../../../../model/localidades.model';
import { LocalidadService } from '../../../../../core/localidad.service';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
  students:IStudent[]=[]

displayedColumns: string[] = [
'id',
'fullName',
'birthDate',
'adreess',
'email',
'localidad',
'acciones'
];

  constructor(
    private studentService:StudentsService,
    private matDialog:MatDialog){}
  
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents():void{
    this.studentService.getStudents().subscribe({
      next:(students)=>this.students=students
    })
  }
  
  openDialog(student?:IStudent):void{
    this.matDialog
    .open(StudentDialogComponent, {
      data: { student},
      width:'500px'
    })
    .afterClosed()
    .subscribe({
      next: (result)=>{
        if (result){
          if (student){
            this.studentService.updateStudent(student.id,result).subscribe({
              next: (students) => {
                this.students=[...students];
              },
            })
          }else{
            this.studentService.createStudent(result).subscribe({
              next: (students) => {
                this.students=[...students];
              },
            })
          }
        }
      }
    });
  }

  onDeleteStudent(id: number): void {
    if (confirm('Esta seguro?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: (students) => {
          this.students=[...students];
        },
      })
    }
  }
}








   

