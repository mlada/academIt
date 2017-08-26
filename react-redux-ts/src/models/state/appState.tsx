export interface IAppState{
    isInitializing: boolean; // first loading
    count:number;
    min:number;
    max:number;
}

export class AppState implements IAppState{
    isInitializing: boolean; // first loading
    count:number;
    min:number;
    max:number;

    constructor() {
        this.isInitializing = false; // first loading
        this.count = 0;
        this.min = 0;
        this.max = 10;
    }
}