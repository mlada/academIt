import * as Redux from 'redux';
import {IGlobalState} from '../models/state/globalState';

export class LoginActions {

    static init():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            dispatch({
                type: 'Login/Init'
            });

        };
    }
    static setInput():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const phone = getState().user.phone;
            const password = getState().user.password;
            dispatch({
                type: 'Login/SetInput'
                , payload: {phone,password}
            });

        };
    }
    static showValidation():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const phone = getState().user.phone;
            // const valid = getState().validation.phone;
            console.log(phone);
            dispatch({
                type: 'Login/ShowValidation'
            });

        };
    }

}
