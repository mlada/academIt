export interface IAppState{
    isInitializing: boolean; // first loading
    isLogin: boolean;
    count:number;
    min:number;
    max:number

}

export class AppState implements IAppState{
    isInitializing: boolean; // first loading
    isLogin: boolean;
    count:number;
    min:number;
    max:number;


    constructor() {
        this.isInitializing = false; // first loading
        this.isLogin = false;
        this.count = 0;
        this.min = 0;
        this.max = 10;
        
    }
}