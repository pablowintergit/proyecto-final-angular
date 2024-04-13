import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {
    studentForm:FormGroup;
    constructor(private formBuilder:FormBuilder){
      this.studentForm=this.formBuilder.group({
          name:[''],
          lastName:[''],
          birthDate:[''],
          email:[''],
          adreess:[''],
          localidad:['']
        }
      );
    }
}
