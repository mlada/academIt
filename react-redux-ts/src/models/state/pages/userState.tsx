export interface IUserState {
    phone:number;
    password:any;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;
    shownPage:number;

}
export class UserState implements IUserState{
    phone:number;
    password:any;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;
    shownPage:number;


    constructor() {
        this.phone= 9079999999;
        this.shownPage = 1;

    }
}