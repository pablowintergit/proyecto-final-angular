import { Injectable } from '@angular/core';
import { Class, Course, IClass,Localidad,Student, Teacher } from '../../../../model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  
  private classes: IClass[] = [
      {
          id: 1,
          course: new Course(1, 'Angular', 'Desarrollo Front End Angular',new Teacher(1, 'Pablo', 'Winter')),
          shedule: 'Jueves 18:00 a 20:00',
          student: {id:1,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",
          localidad: new Localidad("cordoba","Cordoba")},
          fecha: new Date()
      },
      { 
          id: 2,
          course: new Course(2, 'Java', 'Desarrollo Back End Java',new Teacher(2, 'Pedro', 'Lopez')),
          shedule: 'Miercoles 17:00 a 20:00',
          student: {id:4,name:"Ivana",lastName:"Paez", birthDate:new Date(1992,5,21), adreess:"Colon 150",email:"ivana@hotmail.com",
          localidad: new Localidad("buenos-aires","Buenos Aires")},
          fecha: new Date(),
      }
  ];

  getClasses():Observable<IClass[]>{
    return of(this.classes);
  }

  createClass(clazz:IClass):Observable<IClass[]>{
      clazz.id=this.getUltimo();
      this.classes.push(clazz);
      return of(this.classes);
  }

  deleteCourse(id:number):Observable<ICourse[]>{
    return of(this.classes.filter(c=> c.id!==id));
  }

  updateCourse(id:number,clazz:IClass):Observable<IClass[]>{
    return of(this.classes.map(c=> c.id===id?{...c,...clazz}:c));
  }

  getUltimo():number{
    return this.classes.length+1;
  }

  constructor() { }


  
}
  
  

    
  


  

