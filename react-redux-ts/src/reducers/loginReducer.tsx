import {UserState, IUserState} from '../models/state/pages/userState';

export default class LoginReducer {
    static handle(state: any = new UserState, action: any): IUserState {
        switch (action.type) {
            case 'Login/Init': {
                return {...state};
            }
            case 'Login/SetInput': {
                const phone = action.payload.phone;
                const password = action.payload.password;
                return {...state,phone:phone,password:password};
            }
            default: {
                return state;
            }
        }
    }
}