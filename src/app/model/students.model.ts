import { ILocalidad } from "./localidades.model";

export interface IStudent{
    id:number,
    name:string,
    lastName:string,
    birthDate:Date,
    email:string,
    adreess:string,
    localidad:ILocalidad
}