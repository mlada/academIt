import {UserState, IUserState} from '../models/state/pages/userState';

export default class LoginReducer {
    static handle(state: any = new UserState, action: any): IUserState {
        switch (action.type) {
            case 'Login/Init': {
                return state;
            }
            default: {
                return state;
            }
        }
    }
}