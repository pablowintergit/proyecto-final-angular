import { Component } from '@angular/core';
import { IStudent } from '../../../../../model';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { Localidad } from '../../../../../model/localidades.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent {
  public localidades:Localidad[]=[
    new Localidad("cordoba","Cordoba"),
    new Localidad("alta-gracia","Alta Gracia"),
    new Localidad("buenos-aires","Buenos Aires"),
    new Localidad("santa-fe","Santa Fe"),
    new Localidad("jesus-maria","Jesus Maria"),
    new Localidad("carlos-paz","Carlos Paz")
  ];
  students:IStudent[]=[
    {id:1,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",
      localidad: new Localidad("cordoba","Cordoba")},
    {id:2,name:"Juan",lastName:"Rodriguez",birthDate:new Date(1990,5,20),adreess:"Laprida 150",email:"juanrodriguez@gmail.com",
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

 /*  openDialog():void{
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
  } */

  openDialog(): void {
    const dialogRef = this.matDialog.open(StudentDialogComponent, {
      data: { localidades: this.localidades}
    });
    dialogRef
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








   

