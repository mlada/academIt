import {AppState, IAppState} from '../models/state/appState';

export default class AppReducer {
    static handle(state: any = new AppState, action: any): IAppState {
        switch (action.type) {
            case 'App/Init': {
                const visitPage = action.payload;
                return {...state, isLoading: false, isInitializing: false, visitPage : visitPage + 1};
            }
            case 'App/Authorize': {
                return {...state, isAuthorized: true };
            }
            case 'App/Disauthorize': {
                return {...state, ...{ isAuthorized: false }};
            }
            case 'App/Spinner/Show': {
                return {...state, ... { isLoading: true }};
            }
            case 'App/Spinner/Hide': {
                return {...state, ... { isLoading: false }};
            }
            case 'App/Min': {
                const min = action.payload;
                return {...state, ... { min: min }};
            }
            case 'App/Max': {
                const max = action.payload;
                return {...state, ... { max: max }};
            }
            case 'App/Count': {
                const count = action.payload;
                return {...state, ... { count: count }};
            }
            case 'App/Login': {
                const login = action.payload;
                return {...state, login : login};
            }
            case 'App/Password': {
                const password = action.payload;
                return {...state, password : password};
            }
            case 'App/Increment': {

                return {...state, ... { count : (state.count + 1) }};
            }
            case 'App/Decrement': {

                return {...state, ... { count : (state.count - 1)  }};
            }
            case 'App/ChangeLogin': {
                return {...state, isLogin: true,  password : '', login:''};
            }
            case 'App/CountVisits': {
                const visitPage = action.payload;
                return {...state, visitPage : visitPage + 1};
            }
            default: {
                return state;
            }
        }
    }
}