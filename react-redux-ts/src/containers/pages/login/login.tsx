import './login.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../../models/state/globalState';
import {IUserState} from '../../../models/state/pages/userState';
import {LoginActions} from '../../../actions/loginActions';
import ContactForm from '../../form/formPageOne';

interface ILoginProps {
    phone: number;
    phoneValidationText: any;
    phoneValidationState: any;
    password: any;
    passwordValidationText: any;
    fullName: string;
    birthDate: any;
    email: string;
    sex: any;
    livingAdress: string;
    registrationAdress: string;
    passport: number;


    init: () => void;
    setInput: (e:any) => void;
    onButtonClick: () => void;
    goStepTwo: (e:any) => void;

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
                                <input id="password" value={this.props.password} onChange={(e)=>{this.props.setInput(e)}}/>
                                <label htmlFor="password">Введите ваш номер телефона</label>
                            </div>
                            <div className="registration-field-error">
                                { this.props.passwordValidationText.map((rule:any)=>
                                    <span className={ "input-error " + ( this.props.phoneValidationState || "") }>
                                        {rule}
                                    </span>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                    <ContactForm onSubmit={this.submit} />
                </div>
            </div>

        );

    }
    submit(values:any) {
        console.log(values);
    }

}

const mapStateToProps = (state: IGlobalState, ownProps: any) => {
    return {
        phone: state.user.phone
        , phoneValidationText: state.user.phoneValidationText
        , phoneValidationState: state.user.phoneValidationState
        , password: state.user.password
        , passwordValidationText: state.user.passwordValidationText
        , fullName: state.user.fullName
        , birthDate: state.user.birthDate
        , email: state.user.email
        , sex: state.user.sex
        , livingAdress: state.user.livingAdress
        , registrationAdress: state.user.registrationAdress
        , passport: state.user.passport
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        init: () => {
            dispatch(LoginActions.init())
        },
        setInput: (e:any) => {
            dispatch(LoginActions.setInput(e))
        },
        onButtonClick: () => {
            dispatch(LoginActions.onButtonClick())
        },
        goStepTwo: (e:any) => {
            dispatch(LoginActions.onButtonClick())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));