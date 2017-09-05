import './login.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../../models/state/globalState';
import {IUserState} from '../../../models/state/pages/userState';
import {LoginActions} from '../../../actions/loginActions';

interface ILoginProps {
    phone: number;
    phoneValidation: any;
    password: any;
    fullName: string;
    birthDate: any;
    email: string;
    sex: any;
    livingAdress: string;
    registrationAdress: string;
    passport: number;

    validationState:string;

    init: () => void;
    setInput: () => void;

}



class LoginPage extends React.Component<ILoginProps, IUserState> {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.init();
    }

    render() {

        return (
            <div className="LoginPage">
                <div className="registration-form">
                    <form>
                        <div className="registration-field">
                            <div className="registration-field-input">
                                <input type="text" name="phone" id="phone" max="8" value={this.props.phone}
                                       onChange={(e)=>{this.props.setInput()}}/>
                                <label htmlFor="phone">Введите ваш номер телефона</label>
                            </div>
                            <div className="registration-field-error">
                                { this.props.phoneValidation.map((rule:any)=>
                                    <span className={ "input-error " + ( this.props.validationState || "") }>
                                        {rule}
                                    </span>
                                    )
                                }
                                {/*<span className={ "input-error " + ( this.props.validationState || "") }>
                                    {this.props.phoneValidation.typeRule}
                                </span>
                                <span className={ "input-error " + ( this.props.validationState || "") }>
                                    {this.props.phoneValidation.size}
                                </span>
                                <span className={ "input-error " + ( this.props.validationState || "") }>
                                    {this.props.phoneValidation.onlyNum}
                                </span>*/}

                            </div>
                        </div>
                        <div className="registration-field">
                            <div className="registration-field-input">
                                <input type="password" name="password" id="password" min="4" max="8" value={this.props.password}/>
                                <label htmlFor="password">Введите ваш пароль</label>
                            </div>
                            <div className="registration-field-error">

                                <span className="input-error input-error_normal">
                                  номер без 8
                                </span>
                                <span className="input-error input-error_error">
                                  только цифры
                                </span>
                                <span className="input-error input-error_checked">
                                  номер состоит из 10 символов
                                </span>
                            </div>
                        </div>
                        <div className="registration-button_submit">
                            <button type="submit">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (state: IGlobalState, ownProps: any) => {
    return {
        phone: state.user.phone
        , phoneValidation: state.user.phoneValidation
        , password: state.user.password
        , fullName: state.user.fullName
        , birthDate: state.user.birthDate
        , email: state.user.email
        , sex: state.user.sex
        , livingAdress: state.user.livingAdress
        , registrationAdress: state.user.registrationAdress
        , passport: state.user.passport
        , validationState: state.user.validationState
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        init: () => {
            dispatch(LoginActions.init())
        },
        setInput: () => {
            dispatch(LoginActions.setInput())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
