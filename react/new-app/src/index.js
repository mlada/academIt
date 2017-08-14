import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); // функция плейлист при создании стора - редьюсер

ReactDOM.render(
   <Provider store={store}>
       <App />
   </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

/*

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const initialState =[
    'smels like spirit',
    'mr sadman'
];

function playList(state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state, // оператор спред чтобы добавить значение в массив и вернуть новый массив
            action.payload
        ];
    }
    return state;
}

const store = createStore(playList); // функция плейлист при создании стора - редьюсер

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();*/
