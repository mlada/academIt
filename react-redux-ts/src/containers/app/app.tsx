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
    visitPage:any;
    login:string;
    password:string;

    init:() => void;
    setMin:(num:number) => void;
    setMax:(num:number) => void;
    setCount:(num:number) => void;
    setLogin:(str:string) => void;
    setPassword:(str:string) => void;
    changeLogin:(e:any) => void;
    countVisits:() => void;
    increment:() => void;
    decrement:() => void;
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
        if ("" == document.cookie){
            this.props.countVisits();
        }
        var optionalElement:any;
        if (this.props.isInitializing) {
            optionalElement = null;
        } else if (this.props.isLogin) {
            optionalElement =(
                <div>
                    <div className="input-row">
                        <input type="number" name="min" id="min" value={this.props.min}
                               onChange={(e)=>{this.props.setMin(+e.target.value)}}/>
                        <input type="number" name="max" id="max" value={this.props.max}
                               onChange={(e)=>{this.props.setMax(+e.target.value)}}/>
                    </div>
                    <div className="input-row">
                        <button id="dec" onClick={(e)=>{this.onDecClick(e)}}>-</button>
                        <input type="number" name="count" id="count" value={this.props.count}
                               onChange={(e)=>{this.props.setCount(+e.target.value)}}/>
                        <button id="inc" onClick={(e)=>{this.onIncClick(e)}}>+</button>
                    </div>
                </div>
            );
        } else if (!this.props.isLogin){
            optionalElement =(
                <div className="popup-login">
                    <form id="client-login">
                        <div className="input-column">
                            <label>Логин</label>
                            <input id="login" type="text" name="loginVal"
                                   placeholder="Введите номер телефона" value={this.props.login}
                                   onChange={(e)=>{this.props.setLogin(e.target.value)}}/>
                        </div>
                        <div className="input-column">
                            <label >Пароль</label>
                            <input id="password" type="text" placeholder="Пароль" name="passwordVal"
                                   value={this.props.password}
                                   onChange={(e)=>{this.props.setPassword(e.target.value)}}/>
                        </div>
                        <div className="input-column">
                            <a className="btn-submit" onClick={(e)=>{this.props.changeLogin(e);this.props.countVisits();}}>Войти</a>
                        </div>
                    </form>
                </div>
            );
        }
        return (
            <div className="App">
                <span className="counter">Количество посещений сегодня {this.props.visitPage} </span>
                {optionalElement}
            </div>
        );

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
        , isLogin: state.app.isLogin
        , min: state.app.min
        , max: state.app.max
        , count: state.app.count
        , visitPage: state.app.visitPage
        , login: state.app.login
        , password: state.app.password
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
        setCount: (num:number) => {
            dispatch(AppActions.count(num))
        },
        setLogin: (str:string) => {
            dispatch(AppActions.login(str))
        },
        setPassword: (str:string) => {
            dispatch(AppActions.password(str))
        },
        changeLogin: (e:any) => {
            dispatch(AppActions.changeLogin(e))
        },
        countVisits: () => {
            dispatch(AppActions.countVisits())
        },
        increment: () => {
            dispatch(AppActions.increment())
        },
        decrement: () => {
            dispatch(AppActions.decrement())
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
