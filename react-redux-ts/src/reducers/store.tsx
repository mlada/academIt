import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {IGlobalState} from '../models/state/globalState';
import { reducer as formReducer } from 'redux-form'
import AppReducer from './appReducer';
import LoginReducer from './loginReducer';

const enhancer = compose(
    applyMiddleware(
        thunk.withExtraArgument({})
    )
);

const rootReducer =  combineReducers<IGlobalState>({
    app: AppReducer.handle
    , user: LoginReducer.handle
    , form: formReducer
  });
// Add the reducer to your store on the `routing` key
export const store = createStore<IGlobalState>(rootReducer, enhancer);