import * as Redux from 'redux';
import {IGlobalState} from '../models/state/globalState';
// import { getCookie, setCookie } from 'redux-cookie';

export class LoginActions {

    static init():(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const phoneNumber = getState().user.phone;
            dispatch({
                type: 'Login/Init'
                ,payload: {phoneNumber}

            });

        };
    }
    static goStepTwo(jsonValue:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const phoneNumber = jsonValue.phone;
            const page = getState().user.shownPage;
            dispatch({
                type: 'Login/GoStepTwo'
                ,payload: {phoneNumber,page}
            });

        };
    }
    static goStepThree(jsonValue:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const fullName = jsonValue.fullName;
            const birthDate = jsonValue.birthDate;
            const email = jsonValue.email;
            const sex = jsonValue.sex;
            const page = getState().user.shownPage;
            dispatch({
                type: 'Login/GoStepThree'
                ,payload: {fullName,birthDate,email,sex,page}
            });

        };
    }

}
