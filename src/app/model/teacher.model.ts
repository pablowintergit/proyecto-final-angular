export interface ITeacher {
    id: number;
    name: string;
    lastName: string;
}
export class Teacher implements ITeacher {
    constructor(public id: number, public name: string, public lastName: string) {}
}
