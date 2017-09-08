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
    static goStepTwo(e:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const phoneNumber = e.phone;
            const page = getState().user.shownPage;
            dispatch({
                type: 'Login/GoStepTwo'
                ,payload: {phoneNumber,page}
            });

        };
    }
    static goStepThree(e:any):(dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => any {
        return (dispatch:Redux.Dispatch<any>, getState:() => IGlobalState, thunkService:any) => {
            const fullName = e.fullName;
            const birthDate = e.birthDate;
            const email = e.email;
            const sex = e.sex;
            const page = getState().user.shownPage;
            dispatch({
                type: 'Login/GoStepThree'
                ,payload: {fullName,birthDate,email,sex,page}
            });

        };
    }

}
