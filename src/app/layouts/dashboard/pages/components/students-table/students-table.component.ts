import { Component } from '@angular/core';
import { IStudent } from '../../../../../model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent {
  students:IStudent[]=[
    {id:1,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",password:"secret"},
    {id:2,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",password:"secret"},
    {id:3,name:"Pedro",lastName:"Garcia", birthDate:new Date(1994,2,15),adreess:"Asuncion 390",email:"garcia@hotmail.com",password:"secret"},
    {id:4,name:"Ivana",lastName:"Paez", birthDate:new Date(1992,5,21), adreess:"Colon 150",email:"ivana@hotmail.com",password:"secret"},
    {id:5,name:"Luis",lastName:"Machado", birthDate:new Date(1990,4,16),adreess:"Tejeda 187",email:"luisma@gmail.com",password:"secret"},
    {id:6,name:"Roxana",lastName:"Santucho", birthDate:new Date(1993,8,25), adreess:"Rivadavaia 90",email:"santuch58@hotmail.com",password:"secret"},
    {id:7,name:"Juan",lastName:"Zapata", birthDate:new Date(1990,5,2), adreess:"Vespucio 147",email:"zapata87@outlook.com",password:"secret"},
    {id:8,name:"Sabrina",lastName:"Lopez", birthDate:new Date(1992,8,26),adreess:"Ambrosio Olmos 1900",email:"sablope@gmail.com",password:"secret"}
]

displayedColumns: string[] = [
'id',
'name',
'lastName',
'birthDate',
'adreess',
'email'
];
}










   

