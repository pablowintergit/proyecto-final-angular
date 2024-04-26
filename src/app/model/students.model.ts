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
export class Student implements IStudent{
    constructor(public id:number,public name:string,public lastName:string,public birthDate:Date,
        public email:string,public adreess:string,public localidad:ILocalidad){}
}