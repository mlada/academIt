import './login.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../../models/state/globalState';
import {IUserState} from '../../../models/state/pages/userState';
import {LoginActions} from '../../../actions/loginActions';
import FormStepOne from '../../form/formPageOne';
import FormStepTwo from "../../form/formPageTwo";
// import {render} from "react-dom";
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
interface ILoginProps {
    phone: number;
    password: any;
    fullName: string;
    birthDate: any;
    email: string;
    sex: any;
    livingAdress: string;
    registrationAdress: string;
    passport: number;
    shownPage:number;

    init: () => void;
    goStepTwo: (e:any) => void;
    goStepThree: (e:any) => void;

}



class LoginPage extends React.Component<ILoginProps, IUserState> {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.init();

    }
    firstSubmit = (values:any) => {
        const sl:any = sleep(500);
        sl.then(({...data}:any) =>{
                this.props.goStepTwo(values);
                console.log(this.props.phone);
                });
            }
    secondSubmit = (values:any) => {
        const sl:any = sleep(500);
        sl.then(({...data}:any) =>{
                this.props.goStepThree(values);
                console.log(this.props.sex);
                });
            }
    render() {
        var el:any;
        if(this.props.shownPage === 1) {
            el = (<FormStepOne onSubmit={this.firstSubmit}/>);
        } else if (this.props.shownPage === 2) {
            el = (<FormStepTwo onSubmit={this.secondSubmit} />);
        } else if (this.props.shownPage === 3) {
            el = (
                <div>
                    <h1>Thanks, {this.props.fullName}.</h1>
                    <p>We will phone you {this.props.phone}</p>
                    <p>Or email to {this.props.email}</p>
                </div>);
        }
        console.log(el);
        return (
            <div className="LoginPage">
                <div className="registration-form">
                    {el}
                </div>
            </div>

        );

    }

}

const mapStateToProps = (state: IGlobalState, ownProps: any) => {
    return {
        phone: state.user.phone
        , password: state.user.password
        , fullName: state.user.fullName
        , birthDate: state.user.birthDate
        , email: state.user.email
        , sex: state.user.sex
        , livingAdress: state.user.livingAdress
        , registrationAdress: state.user.registrationAdress
        , passport: state.user.passport
        , shownPage: state.user.shownPage
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        init: () => {
            dispatch(LoginActions.init())
        },
        goStepTwo: (e:any) => {
            dispatch(LoginActions.goStepTwo(e))
        },
        goStepThree: (e:any) => {
            dispatch(LoginActions.goStepThree(e))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
