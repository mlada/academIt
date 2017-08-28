import * as Redux from 'redux';
import {IGlobalState} from '../models/state/globalState';

export class AppActions {

    static init():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const count = getState().app.count;
            dispatch({
                type: 'App/Init'
                , payload: count
            });

        };
    }

    static increment():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const max = getState().app.max;
            const count = getState().app.count;
            if (count < max) {
                dispatch({
                    type: 'App/Increment'
                });
            }

        };
    }

    static decrement():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const min = getState().app.min;
            const count = getState().app.count;
            if (count > min) {
                dispatch({
                    type: 'App/Decrement'
                });
            }


        };
    }

    static onSubmit():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {

            dispatch({
                type: 'App/Submit'
            });


        };
    }

    static min(num:number):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const max = getState().app.max;
            const count = getState().app.count;
            if (num > max) {
                dispatch({
                    type: 'App/Min'
                    , payload: +max - 1
                });
            } else if (count < num) {
                dispatch({
                    type: 'App/Min'
                    , payload: +count - 1
                });
            } else {
                dispatch({
                    type: 'App/Min'
                    , payload: num
                });
            }

        };
    }

    static max(num:number):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const min = getState().app.min;
            const count = getState().app.count;
            if (num < min) {
                dispatch({
                    type: 'App/Max'
                    , payload: +min + 1
                });
            } else if (count > num) {
                dispatch({
                    type: 'App/Max'
                    , payload: +count + 1
                });
            } else {
                dispatch({
                    type: 'App/Max'
                    , payload: num
                });
            }
        };
    }

    static count(num:number):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const min = getState().app.min;
            const max = getState().app.max;
            if (num < min) {
                dispatch({
                    type: 'App/Count'
                    , payload: +min + 1
                });
            } else if (num > max) {
                dispatch({
                    type: 'App/Count'
                    , payload: +max - 1
                });
            } else {
                dispatch({
                    type: 'App/Count'
                    , payload: num
                });
            }
        };
    }

    static login(str:string):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            dispatch({
                type: 'App/Login'
                , payload: str
            });
        };
    }
    static password(str:string):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            dispatch({
                type: 'App/Password'
                , payload: str
            });
        };
    }

    static isLogin(e:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            e.preventDefault();
            const login = getState().app.login;
            const password = getState().app.password;
            if (login !== '' && password !== '') {
                dispatch({
                    type: 'App/Submit'
                });
            }
        };
    }


}
