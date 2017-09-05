export interface IUserState {
    phone:number;
    phoneValidation:any;
    password:any;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;

    validationState:string;

}
export class UserState implements IUserState{
    phone:number;
    phoneValidation:any;
    password:any;
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;

    validationState:string;

    constructor() {
        this.phoneValidation = {
            typeRule: "номер телефона без 8"
            , size: "номер состоит из 10 знаков"
            , onlyNum : "только цифры"
        };
        this.validationState = 'input-error_normal';

    }
}