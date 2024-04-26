import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from '../../../../../model';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { Localidad, ILocalidad } from '../../../../../model/localidades.model';
import { LocalidadService } from '../../../../../core/localidad.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
  
  localidades:ILocalidad[]=[];


  students:IStudent[]=[
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
    private localidadService:LocalidadService,
    private matDialog:MatDialog){}
  
  ngOnInit(): void {
    this.getLocalidades();
  }

  getLocalidades():void{
    this.localidadService.getLocalidades().subscribe({
      next:(localidades)=>this.localidades=localidades
    });
  }

  openDialog(student?:IStudent):void{
    this.matDialog
    .open(StudentDialogComponent, {
      data: { localidades: this.localidades,
              editingStudent:student
      },
      width:'500px'
    })
    .afterClosed()
    .subscribe({
      next: (result)=>{
        if (result){
          /* const localidad:Localidad | undefined=this.localidades.find(l=> l.codigo===result.localidad);
          result.localidad=localidad; */
          if (student){
            this.students=this.students.map(s=> s.id===student.id?{...s,...result}:s);
          }else{
            const ultimo:number=this.getUltimo();
            result.id=ultimo;
            this.students=[...this.students,result];
          }
        }
      }
    });
  }

  getUltimo():number{
     let ids:number[]=this.students.map(s=>s.id);
     let id:number=Math.max(...ids) + 1;
     return id;
  }

  onDeleteStudent(id: number): void {
    if (confirm('Esta seguro?')) {
      this.students = this.students.filter((u) => u.id != id);
    }
  }

}








   
