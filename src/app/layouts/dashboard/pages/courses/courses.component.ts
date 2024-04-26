import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../../model';
import { CoursesService } from './courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
    courses: ICourse[] = [];

    displayedColumns: string[] = [
      'id',
      'name',
      'description',
      'teacher',
      'acciones',
    ];

    constructor(private coursesService: CoursesService,
      private matDialog:MatDialog
    ) {
      
    }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
     this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: () => {},
      complete: () => {
        //this.isLoading = false;
      },
    });
  }

  openDialog(course?: ICourse): void {
    this.matDialog.open(CourseDialogComponent, {
      data: { course },
    })
    .afterClosed()
    .subscribe({
      next: (result)=>{
        if (result){
         /*  if (student){
            this.students=this.students.map(s=> s.id===student.id?{...s,...result}:s);
          }else{
            const ultimo:number=this.getUltimo();
            result.id=ultimo;
            this.students=[...this.students,result];
          } */
        }
      }
    });
  }

  onDeleteCourse(id: number): void {
    
  }

}
