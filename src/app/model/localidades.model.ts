export interface ILocalidad{
    codigo:string,
    nombre:string
}
export class Localidad implements ILocalidad{
    constructor(public codigo:string,public nombre:string){}
}