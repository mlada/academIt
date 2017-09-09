import './login.css';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IGlobalState} from '../../../models/state/globalState';
import {IUserState} from '../../../models/state/pages/userState';
import {LoginActions} from '../../../actions/loginActions';
import FormStepOne from '../../form/formPageOne';
import FormStepTwo from "../../form/formPageTwo";
// import FormStepThree from "../../form/formPageThree";
// import {render} from "react-dom";
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
interface ILoginProps {
    phone: number;
    password: any;
    fullName: string;
    birthDate: any;
    email: string;
    sex: any
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
                });
            }
    secondSubmit = (values:any) => {
        const sl:any = sleep(500);
        sl.then(({...data}:any) =>{
                this.props.goStepThree(values);
                });
            }
    thirdSubmit = (values:any) => {
        console.log(values)
            }

    render() {
        var el:any;
        const data = [
            this.props.phone,
            this.props.fullName,
            this.props.birthDate,
            this.props.email,
            this.props.sex
        ]
        if(this.props.shownPage === 1) {
            el = (
                <div>
                    <div className="progress-bar">
                        <h1>Шаг {this.props.shownPage} из 2</h1>
                    </div>
                    <FormStepOne onSubmit={this.firstSubmit}/>
                </div>);
        } else if (this.props.shownPage === 2) {
            el = (
                <div>
                    <div className="progress-bar">
                        <h1>Шаг {this.props.shownPage} из 2</h1>
                    </div>
                    <FormStepTwo onSubmit={this.secondSubmit} />
                </div>);
        } else if (this.props.shownPage === 3) {
            el = (
                <div>
                    <h2>{this.props.fullName}, здравствуйте!</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <p>Phone</p>
                            </td>
                            <td>
                                <p>{this.props.phone}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Email</p>
                            </td>
                            <td>
                                <p>{this.props.email}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>BirthDate</p>
                            </td>
                            <td>
                                <p>{this.props.birthDate}</p>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    <a></a>
                </div>);
        }
        console.log(data);
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
