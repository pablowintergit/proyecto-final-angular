import { Component, OnInit } from '@angular/core';
import { IClass } from '../../../../model';
import { ClassesService } from './classes.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ClassDialogComponent } from './class-dialog.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {
  classes:IClass[] = [];

  constructor(private classesService:ClassesService,
    private matDialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.classesService.getClasses().subscribe({
     next: (classes) => {
       this.classes = classes;
     },
     error: () => {},
     complete: () => {
       //this.isLoading = false;
     },
   });
 }

  displayedColumns: string[] = [
    'id',
    'course',
    'schedule',
    'student',
    'fecha',
    'acciones',
  ];

  openDialog(clazz?:IClass):void{
    this.matDialog.open(ClassDialogComponent, {
      data: { clazz},
    })
    .afterClosed()
    .subscribe({
      next: (result)=>{
        if (result){
          if (clazz){
            this.classesService.updateClass(clazz.id,result).subscribe({
              next: (classes) => {
                this.classes=[...classes];
              },
            })
          }else{
            this.classesService.createClass(result).subscribe({
              next: (classes) => {
                this.classes=[...classes];
              },
            })
          }
        }
      }
    });
  }
  
  onDeleteClass(id:number):void{
    this.classesService.deleteClass(id).subscribe({
      next: (classes) => {
        this.classes=[...classes];
      },
    })
  }

}
