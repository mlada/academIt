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

}
