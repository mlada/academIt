import {UserState, IUserState} from '../models/state/pages/userState';

export default class LoginReducer {
    static handle(state: any = new UserState, action: any): IUserState {
        switch (action.type) {
            case 'Login/Init': {
                const phoneNumber = action.payload.phoneNumber;
                return {...state, shownPage: 1,phone:phoneNumber};
            }
            case 'Login/GoStepTwo': {
                const phoneNumber = action.payload.phoneNumber;
                const page = action.payload.page;
                return {...state, shownPage: page +1, phone:phoneNumber};
            }
            case 'Login/GoStepThree': {
                const fullName = action.payload.fullName;
                const birthDate = action.payload.birthDate;
                const email = action.payload.email;
                const sex = action.payload.sex;
                const page = action.payload.page;
                return {...state, shownPage: page+1 , fullName:fullName, birthDate:birthDate,email:email,sex:sex};
            }
            default: {
                return state;
            }
        }
    }
}