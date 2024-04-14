import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formFieldValidationErrors'
})
export class FormFieldValidationErrorsPipe implements PipeTransform {
  transform(
    value: ValidationErrors | undefined | null,
    ...args: unknown[]
  ): unknown {
    if (value) {
      let messages: string[] = [];
    
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const errorDetail = value[key];
          if (key === 'required') messages.push('Este campo es requerido');
          if (key === 'pattern')
            messages.push('No cumple con el formato requerido');
          if (key === 'maxlength')
            messages.push(
              `No puede tener mas de ${errorDetail.requiredLength} caracteres`
            );
          if (key === 'minlength')              
            messages.push(
              `Debe tener al menos ${errorDetail.requiredLength} caracteres`
            );
          if (key==='onlyLetters'){
            console.log("paso solo numeros");
            
            messages.push(
              `Debe ingresar solo letras y espacios`
            );
          }
          if (key==='dateOverflow'){
            messages.push(
              `La fecha no puede ser mayor a la de hoy`
            );
          }
          if (key==='yearsOverflow'){
            messages.push(
              `La fecha debe ser 4 años o mas menor a la fecha actual`
            );
          }
        }
      }

      let resultado:string=messages.join('. ');

      return resultado;
    }

    return null;
  }
}
