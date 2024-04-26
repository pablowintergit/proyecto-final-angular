import { Injectable } from '@angular/core';
import { Localidad } from '../model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  
  private localidades:Localidad[]=[
    new Localidad("cordoba","Cordoba"),
    new Localidad("alta-gracia","Alta Gracia"),
    new Localidad("buenos-aires","Buenos Aires"),
    new Localidad("santa-fe","Santa Fe"),
    new Localidad("jesus-maria","Jesus Maria"),
    new Localidad("carlos-paz","Carlos Paz")
  ];


  constructor() { }

  getLocalidades():Observable<Localidad[]>{
    return of(this.localidades);
  }

}
