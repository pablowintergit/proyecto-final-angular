import { ITeacher } from "./teacher.model";

export interface ICourse {
    id:number,
    name:string,
    description:string
    teacher:ITeacher;
}

export class Course implements ICourse{
    id:number
    name:string
    description:string
    teacher: ITeacher;
    
    constructor(id:number,name:string,description:string,teacher:ITeacher){
        this.id=id
        this.name=name
        this.description=description;
        this.teacher=teacher;
    }
}
