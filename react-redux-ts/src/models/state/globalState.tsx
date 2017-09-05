import {IAppState} from './appState';
import {IUserState} from './pages/userState';
import {IPassportState} from './pages/passportState';

export interface IGlobalState{
    user: IUserState;
    app: IAppState;
    passport: IPassportState;
}