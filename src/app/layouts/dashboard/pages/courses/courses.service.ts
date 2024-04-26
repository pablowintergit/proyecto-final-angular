import { Injectable } from '@angular/core';
import { Course, ICourse, Teacher } from '../../../../model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses:ICourse[]=[
    new Course(1,'Angular','Desarrollo Front End Angular',new Teacher(1,'Pablo','Winter')),
    new Course(2,'Java','Desarrollo Back End Java',new Teacher(2,'Pedro','Lopez')),
    new Course(3,'Python','Desarrollo Back End Python',new Teacher(3 ,'Juan','Perez')),
    new Course(4,'C#','Desarrollo Back End C#',new Teacher(4 ,'Maria','Garcia')),
    new Course(5,'C++','Desarrollo Back End C++',new Teacher(5 ,'Luis','Rodriguez')),
    new Course(6,'Ruby','Desarrollo Back End Ruby',new Teacher(6 ,'Ana','Martinez')),
  ];

  constructor() { }

  getCourses():Observable<ICourse[]>{
    return of(this.courses);
  }

}
