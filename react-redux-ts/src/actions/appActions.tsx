import * as Redux from 'redux';

import {IGlobalState} from '../models/state/globalState';

export class AppActions {

    static init():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const count = getState().app.count;
            console.log(count);
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

    static inputChange():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            
            dispatch({
                type: 'App/InputChange'
            });


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

            dispatch({
                type: 'App/Min'
                , payload: num
            });

        };
    }

    static max(num:number):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {

            dispatch({
                type: 'App/Max'
                , payload: num
            });

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
}
