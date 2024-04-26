import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../../model';
import { CoursesService } from './courses.service';

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

    constructor(private coursesService: CoursesService) {
      
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
    //TODO
  }

  onDeleteCourse(id: number): void {
    
  }

}
