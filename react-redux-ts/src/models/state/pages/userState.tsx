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
    phoneValidationText:any;
    phoneValidationState:any;
    password:any;
    passwordValidationText:any;
    passwordValidationState:any;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;
    shownPage:number;

    validationState:string;

    constructor() {
        this.phoneValidationText = [
        ];
        this.passwordValidationText = [
        ];
        this.shownPage = 1;

    }
}