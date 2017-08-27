import './app.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../models/state/globalState';
import {AppActions} from '../../actions/appActions';

interface IAppProps {
    isInitializing:boolean;
    isLogin:boolean;
    min:number;
    max:number;
    count:number;
    login:string;

    init:() => void;
    setMin:(num:number) => void;
    setMax:(num:number) => void;
    setLogin:(str:string) => void;
    increment:() => void;
    decrement:() => void;
    inputChange:(val:number) => void;
    onSubmit:() => void;
}

interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.init();
    }

    render() {

        if (this.props.isInitializing) {
            return null;
        }


        return (
            <div className="App">
                {!this.props.isLogin && (
                    <div>
                        <div className="input-row">
                            <input type="number" name="min" id="min" value={this.props.min} onChange={(e)=>{this.props.inputChange()}}/>
                            <input type="number" name="max" id="max" value={this.props.max}/>
                        </div>
                        <div className="input-row">
                            <button id="dec" onClick={(e)=>{this.onDecClick(e)}}>-</button>
                            <input type="number" name="count" id="count" value={this.props.count}/>
                            <button id="inc" onClick={(e)=>{this.onIncClick(e)}}>+</button>
                        </div>
                    </div>)
                }
                {this.props.isLogin && (
                    <div className="popup-login">
                        <form id="client-login">
                            <div className="input-column">
                                <label>Логин</label>
                                <input id="login" type="text" placeholder="Логин" name="loginVal"
                                       value={this.props.login}/>
                            </div>
                            <div className="input-column">
                                <label >Пароль</label>
                                <input id="password" type="text" placeholder="Пароль" name="passwordVal"/>
                            </div>
                            <div className="input-column">
                                <button onClick={(e)=>{this.onSubClick(e)}}>Войти</button>
                            </div>
                        </form>
                    </div>)
                }
            </div>
        );
    }

    onInpChange(e:any) {
        this.props.inputChange();
    }
    onIncClick(e:any) {
        this.props.increment();
    }

    onDecClick(e:any) {
        this.props.decrement();
    }
}

const mapStateToProps = (state:IGlobalState, ownProps:any) => {
    return {
        isInitializing: state.app.isInitializing
        , isLogin: state.app.isInitializing
        , min: state.app.min
        , max: state.app.max
        , count: state.app.count
        , login: state.app.login
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        init: () => {
            dispatch(AppActions.init())
        },
        setMax: (num:number) => {
            dispatch(AppActions.max(num))
        },
        setMin: (num:number) => {
            dispatch(AppActions.min(num))
        },
        setLogin: (str:string) => {
            dispatch(AppActions.login(str))
        },
        increment: () => {
            dispatch(AppActions.increment())
        },
        decrement: () => {
            dispatch(AppActions.decrement())
        },
        onSubmit: () => {
            dispatch(AppActions.onSubmit())
        },
        inputChange: (val:number) => {
            dispatch(AppActions.inputChange(val))
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
