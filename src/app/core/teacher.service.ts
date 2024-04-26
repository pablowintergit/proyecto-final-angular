import { Injectable } from '@angular/core';
import { ITeacher, Teacher } from '../model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teachers:ITeacher[]=[
    new Teacher(1,'Pablo','Winter'),
    new Teacher(2,'Pedro','Lopez'),
    new Teacher(3 ,'Juan','Perez'),
    new Teacher(4 ,'Maria','Garcia'),
    new Teacher(5 ,'Luis','Rodriguez'),
    new Teacher(6 ,'Ana','Martinez'),
  ];

  constructor() { }

  getTeachers():Observable<ITeacher[]>{
    return of(this.teachers);
  }

}
