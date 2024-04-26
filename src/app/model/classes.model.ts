import { ICourse } from "./courses.model";
import { IStudent } from "./students.model";
import { ITeacher } from "./teacher.model";

export interface IClass{
    id:number;
    course:ICourse;
    shedule:string;
    student:IStudent;
    fecha:Date;
}

export class Class implements IClass{
    id:number
    course:ICourse
    shedule:string
    student:IStudent
    fecha:Date
    constructor(id:number,course:ICourse,shedule:string,student:IStudent,fecha:Date){
        this.id=id
        this.course=course
        this.shedule=shedule
        this.student=student
        this.fecha=fecha
    }
}