import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudent, Localidad } from '../../../../../model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students:IStudent[]=[
        {id:1,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",
          localidad: new Localidad("cordoba","Cordoba")},
        {id:2,name:"Ivan",lastName:"Zapata",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",
        localidad:new Localidad("alta-gracia","Alta Gracia") },
        {id:3,name:"Pedro",lastName:"Garcia", birthDate:new Date(1994,2,15),adreess:"Asuncion 390",email:"garcia@hotmail.com",
        localidad:new Localidad("cordoba","Cordoba")},
        {id:4,name:"Ivana",lastName:"Paez", birthDate:new Date(1992,5,21), adreess:"Colon 150",email:"ivana@hotmail.com",
        localidad: new Localidad("buenos-aires","Buenos Aires")},
        {id:5,name:"Luis",lastName:"Machado", birthDate:new Date(1990,4,16),adreess:"Tejeda 187",email:"luisma@gmail.com",
        localidad:new Localidad("santa-fe","Santa Fe")},
        {id:6,name:"Roxana",lastName:"Santucho", birthDate:new Date(1993,8,25), adreess:"Rivadavaia 90",email:"santuch58@hotmail.com",
        localidad:new Localidad("cordoba","Cordoba")},
        {id:7,name:"Juan",lastName:"Zapata", birthDate:new Date(1990,5,2), adreess:"Vespucio 147",email:"zapata87@outlook.com",
        localidad:new Localidad("jesus-maria","Jesus Maria") },
        {id:8,name:"Sabrina",lastName:"Lopez", birthDate:new Date(1992,8,26),adreess:"Ambrosio Olmos 1900",email:"sablope@gmail.com",
        localidad:new Localidad("carlos-paz","Carlos Paz")}
    ]

  constructor() { }

  getStudents():Observable<IStudent[]>{
    return of(this.students);
  }

  createStudent(student:IStudent):Observable<IStudent[]>{
      student.id=this.getUltimo();
      this.students.push(student);
      return of(this.students);
  }

  deleteStudent(id:number):Observable<IStudent[]>{
    return of(this.students.filter(c=> c.id!==id));
  }

  updateStudent(id:number,student:IStudent):Observable<IStudent[]>{
    return of(this.students.map(c=> c.id===id?{...c,...student}:c));
  }

  getUltimo():number{
    let ids:number[]=this.students.map(s=>s.id);
    let id:number=Math.max(...ids) + 1;
    return id;
  }

}