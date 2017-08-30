export interface IAppState{
    isInitializing: boolean; // first loading
    isLogin: boolean;
    count:number;
    visitPage:number;
    min:number;
    max:number
    login:string;
    password:string;

}

export class AppState implements IAppState{
    isInitializing: boolean; // first loading
    isLogin: boolean;
    count:number;
    visitPage:number;
    min:number;
    max:number;
    login:string;
    password:string;


    constructor() {
        this.isInitializing = false; // first loading
        this.isLogin = false;
        this.count = 0;
        this.min = 0;
        this.max = 10;
        this.visitPage = 1;

    }
}