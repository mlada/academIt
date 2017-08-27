import {AppState, IAppState} from '../models/state/appState';

export default class AppReducer {
    static handle(state: any = new AppState, action: any): IAppState {
        switch (action.type) {
            case 'App/Init': {
                return {...state, isLoading: false, isInitializing: false};
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
            case 'App/Login': {
                const login = action.payload;
                return {...state, ... { login: login }};
            }
            case 'App/Increment': {

                return {...state, ... { count : (state.count + 1) }};
            }
            case 'App/Decrement': {

                return {...state, ... { count : (state.count - 1)  }};
            }
            case 'App/InputChange': {
                const val = action.payload;
                return {...state, ... { min: val }};
            }
            case 'App/Submit': {

                return {...state, ... { isLogin: true  }};
            }
            default: {
                return state;
            }
        }
    }
}