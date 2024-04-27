import { ICourse } from "./courses.model";
import { IStudent } from "./students.model";

export interface IClass{
    id:number;
    course:ICourse;
    schedule:string;
    student:IStudent;
    fecha:Date;
}

export class Class implements IClass{
    id:number
    course:ICourse
    schedule:string
    student:IStudent
    fecha:Date
    constructor(id:number,course:ICourse,schedule:string,student:IStudent,fecha:Date){
        this.id=id
        this.course=course
        this.schedule=schedule
        this.student=student
        this.fecha=fecha
    }
}