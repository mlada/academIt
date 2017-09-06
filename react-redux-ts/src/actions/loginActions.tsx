import * as Redux from 'redux';
import {IGlobalState} from '../models/state/globalState';
// import { getCookie, setCookie } from 'redux-cookie';

export class LoginActions {

    static init():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            dispatch({
                type: 'Login/Init'
            });

        };
    }
    static setInput(e:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const input = e.target;
            console.log(input);
            switch (input.id) {
                case 'phone' :{
                    dispatch({
                        type: 'Login/SetPhone'
                        , payload: input
                    });
                }
                case 'password' :{
                    dispatch({
                        type: 'Login/SetPassword'
                        , payload: input
                    });
                }
            }



        };
    }
    static onButtonClick():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
           // const cookie = getCookie("phone");
           //  console.log(cookie);
            dispatch({
                type: 'Login/OnButtonClick'
            });

        };
    }
    static goStepTwo(userInfo:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
           console.log(userInfo.name);
            dispatch({
                type: 'Login/GoStepTwo'
                // , payload:value
            });

        };
    }

}
