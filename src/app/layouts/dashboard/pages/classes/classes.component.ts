import { Component } from '@angular/core';
import { IClase } from '../../../../model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {
  classes:IClase[] = [];


  displayedColumns: string[] = [
    'id',
    'course',
    'shedule',
    'student',
    'fecha',
    'acciones',
  ];

  openDialog():void{
    
  }

  onDeleteClass(id:number):void{
    
  }


}
