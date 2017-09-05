import {UserState, IUserState} from '../models/state/pages/userState';

export default class LoginReducer {
    static handle(state: any = new UserState, action: any): IUserState {
        switch (action.type) {
            case 'Login/Init': {
                return {...state};
            }
            case 'Login/SetPhone': {
                const input = action.payload.input;
                let styl = 'input-error_normal';
                let validationText:any = [];
                if (action.payload.value.length < 4){
                    styl = 'input-error_error';
                    validationText = ['телефон должен содержать более 4 знаков']
                } else if (action.payload.value.length > 4){
                    styl = 'input-error_checked';
                    validationText = ['телефон содержит более 4 знаков']
                }
                return {...state,phone:input,phoneValidationState:styl,phoneValidationText:validationText};
            }
            case 'Login/SetPassword': {
                const input = action.payload.input;
                let styl = 'input-error_normal';
                let validationText:any = [];
                if (action.payload.value.length < 4){
                    styl = 'input-error_error';
                    validationText = ['телефон должен содержать более 4 знаков']
                }
                return {...state,password:input,passwordValidationState:styl,passwordValidationText:validationText};
            }
            default: {
                return state;
            }
        }
    }
}