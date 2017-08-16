import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginVal: "",
            passwordVal: "",
            showHide: "show"
        };
    }
    handleFunctionSubmit(event) {
        event.preventDefault();
        if (this.state.loginVal !== '' && this.state.passwordVal !== '') {
            this.setState({showHide: "hide"});
        } else {
            alert('Заполните поля!')
        }
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
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <Count />

                <div className="popup-login" id={this.state.showHide} >
                    <form id="client-login">
                        <div className="input-column">
                            <label for="login">Логин</label>
                            <input id="login" type="text" placeholder="Логин" name="loginVal" value={this.state.loginVal} onChange={(e) => this.handleInputEnter(e)}/>
                        </div>
                        <div className="input-column">
                            <label for="password">Пароль</label>
                            <input id="password" type="text" placeholder="Пароль"  name="passwordVal" value={this.state.passwordVal } onChange={(e) => this.handleInputEnter(e)}/>
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

export default App;