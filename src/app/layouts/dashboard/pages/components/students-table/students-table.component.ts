import { Component } from '@angular/core';
import { IStudent } from '../../../../../model';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent {
  students:IStudent[]=[
    {id:1,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",localidad:"Cordoba"},
    {id:2,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",localidad:"Alta Gracia"},
    {id:3,name:"Pedro",lastName:"Garcia", birthDate:new Date(1994,2,15),adreess:"Asuncion 390",email:"garcia@hotmail.com",localidad:"Cordoba"},
    {id:4,name:"Ivana",lastName:"Paez", birthDate:new Date(1992,5,21), adreess:"Colon 150",email:"ivana@hotmail.com",localidad:"Buenos Aires"},
    {id:5,name:"Luis",lastName:"Machado", birthDate:new Date(1990,4,16),adreess:"Tejeda 187",email:"luisma@gmail.com",localidad:"Santa Fe"},
    {id:6,name:"Roxana",lastName:"Santucho", birthDate:new Date(1993,8,25), adreess:"Rivadavaia 90",email:"santuch58@hotmail.com",localidad:"Cordoba"},
    {id:7,name:"Juan",lastName:"Zapata", birthDate:new Date(1990,5,2), adreess:"Vespucio 147",email:"zapata87@outlook.com",localidad:"Jesus Maria"},
    {id:8,name:"Sabrina",lastName:"Lopez", birthDate:new Date(1992,8,26),adreess:"Ambrosio Olmos 1900",email:"sablope@gmail.com",localidad:"Carlos Paz"}
]

displayedColumns: string[] = [
'id',
'name',
'lastName',
'birthDate',
'adreess',
'email',
'localidad'
];

  constructor(private matDialog:MatDialog){}

  openDialog():void{
    this.matDialog
    .open(StudentDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result)=>{
        if (result){
          this.students=[...this.students,result];
        }
      }
    });
  }
}










   

