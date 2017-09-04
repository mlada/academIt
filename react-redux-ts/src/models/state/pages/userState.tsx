export interface IUserState {
    phone:number;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;

}
export class UserState implements IUserState{
    phone:number;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;

    constructor() {


    }
}