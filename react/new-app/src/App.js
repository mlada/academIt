import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

class App extends Component {
    addTrack(){
        console.log('addTrack',this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value ='';
    }
    findTrack(){
        console.log('findTrach',this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);

    }
    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <div>
                    <input type="text" ref={(input) => {this.trackInput = input}} />
                    <button onClick={(e)=>{this.addTrack(e)}}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => {this.searchInput = input}} />
                    <button onClick={(e)=>{this.findTrack(e)}}>Find track</button>
                </div>
                <div>
                    <button onClick={this.props.onGetTracks}>Get track</button>
                </div>
                <ul>
                    {this.props.tracks.map((track,index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        );
    }

}

export default connect(
    state => ({
        tracks : state.tracks.filter(track => track.name.includes(state.filterTracks))
    }), //map state props
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name)=>{
            dispatch({type: 'FIND_TRACK', payload: name})

        },
        onGetTracks:()=>{
            
            dispatch(getTracks());
        }
    }) // возвращает объект методов
)(App);

/*

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minimum: 1,
            maximum: 10,
            numeric: 4,
            min: 1,
            max: 10,
            loginVal: "",
            passwordVal: "",
            showHide: "show"
        };
    }

    handleInputMinChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        if (value > this.state.maximum) {
            let maxVal = this.state.maximum;
            newState = {
                [name]: maxVal - 1,
                min: maxVal - 1
            }
        } else {
            newState = {
                [name]: value,
                min: value
            }
        }
        this.setState(newState);
    }

    handleInputMaxChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        if (value < this.state.minimum) {
            let minVal = this.state.minimum;
            newState = {
                [name]: minVal + 1,
                max: minVal + 1
            }
        } else {
            newState = {
                [name]: value,
                max: value
            }
        }
        this.setState(newState);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;
        var newState;
        let x;
        if (value < this.state.minimum) {
            x = this.state.minimum;
        }
        else if (value > this.state.maximum) {
            x = this.state.maximum;
        } else {
            x = value;
        }
        newState = {
            [name]: x
        };
        this.setState(newState);
    }

    handleInputEnter(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var newState;
        newState = {
            [name]: value
        };
        this.setState(newState);
    }

    handleFunctionMinus(event) {
        this.setState({numeric: --this.state.numeric});
        if (this.state.min > this.state.numeric) {
            this.setState({numeric: this.state.min});
        }
    }

    handleFunctionPlus(event) {
        this.setState({numeric: ++this.state.numeric});
        if (this.state.max < this.state.numeric) {
            this.setState({numeric: this.state.max});
        }
    }

    handleFunctionSubmit(event) {
        event.preventDefault();
        if (this.state.loginVal !== '' && this.state.passwordVal !== '') {
            this.setState({showHide: "hide"});
        } else{
            alert('Заполните поля!')
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <div className="input-row">
                        <span>Минимум</span>
                        <input id="number-min" type="number" name="minimum" value={this.state.minimum}
                               onChange={(e) => this.handleInputMinChange(e)}/>
                        <span>Максимум</span>
                        <input id="number-max" type="number" name="maximum" value={this.state.maximum}
                               onChange={(e) => this.handleInputMaxChange(e)}/>
                    </div>
                    <div className="input-row">
                        <span id="dec" onClick={(e) =>this.handleFunctionMinus(e)}>-</span>
                        <input id="number" className="input-check" type="number" name="numeric"
                               min={this.state.min} max={this.state.max} value={this.state.numeric}
                               onChange={(e) => this.handleInputChange(e)}/>
                        <span id="inc" onClick={(e) => this.handleFunctionPlus(e)}>+</span>
                    </div>
                </p>

                <div className="popup-login" id={this.state.showHide} >
                    <form id="client-login">
                        <div className="input-column">
                            <label for="login">Логин</label>
                            <input id="login" type="text" name="loginVal" value={this.state.loginVal} onChange={(e) => this.handleInputEnter(e)}/>
                        </div>
                        <div className="input-column">
                            <label for="password">Пароль</label>
                            <input id="password" type="text" name="passwordVal" value={this.state.passwordVal } onChange={(e) => this.handleInputEnter(e)}/>
                        </div>
                        <div className="input-column">
                            <input id="submit" type="submit" name="submit" value='Войти' onClick={(e) => this.handleFunctionSubmit(e)}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;*/
