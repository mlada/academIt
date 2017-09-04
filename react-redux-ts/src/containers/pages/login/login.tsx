import './login.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../../models/state/globalState';
import {IUserState} from '../../../models/state/pages/userState';
import {LoginActions} from '../../../actions/loginActions';

interface ILoginProps {
    phone:number;/*
    fullName:string;
    birthDate:any;
    email:string;
    sex:any;
    livingAdress:string;
    registrationAdress:string;
    passport:number;*/

    init:() => void;

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
                <input value={this.props.phone}/>
            </div>
        );

    }

}

const mapStateToProps = (state:IGlobalState, ownProps:any) => {
    return {
        phone: state.user.phone
        /*, fullName: state.user.fullName
        , birthDate: state.user.birthDate
        , email: state.user.email
        , sex: state.user.sex
        , livingAdress: state.user.livingAdress
        , registrationAdress: state.user.registrationAdress
        , passport: state.user.passport*/
    }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
    return {
        init: () => {
            dispatch(LoginActions.init())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
