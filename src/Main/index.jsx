import React, {Component} from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';
import EmploySear from './EmploySear/index';
import JobSear from './JobSear/index';
import Help from './Help/index';
import Registration from './Registration/index';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const latinaRegex = RegExp(/^\s*(\w+)\s*$/);
const kirylRegex = RegExp(/а-я/i);

const formValid = ({formErrors, ...rest})=> {
    let valid = true;

    //VALIDATE FORM ERRORS BEING EMPTY
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    //VALIDATE FORM ERRORS BEING FILLED OUT
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
};

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            userName: null,
            password: null,
            email: null,
            phoneNum: null,
            userType: null,
            formErrors: {
                firstName: "",
                lastName: "",
                userName: "",
                password:"",
                email: "",
                phoneNum:"",
                userType: ""
            }
        };
    }

    handleUserTypeSelect = e => {
        this.setState({
            userType: e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        let formErrors = {...this.state.formErrors};

        formErrors.userType =
          this.state.userType === null
            ? "Выберите тип аккаунта"
            : "";

        if(formValid(this.state)){
            console.log(`
                SUBMITTING
                ${this.state}
            `)
        } else {
            console.error("FORM INVALID");
        }

    };

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                  latinaRegex.test(value)
                    ? formErrors.firstName = "Имя должен состоять из кириллических букв"
                    : !kirylRegex.test(value)
                        ? ""
                        : "Имя должен состоять из кириллических букв";
                break;
            case 'lastName':
                formErrors.lastName =
                  latinaRegex.test(value)
                    ? formErrors.lastName = "Фамилия должна состоять из кириллических букв"
                    : "";
                break;
            case 'userName':
                formErrors.userName =
                  value.length < 5
                    ? "Имя пользователя должна состоять как минимум из 5 символов."
                    : "";
                break;
            case 'password':
                formErrors.password =
                  value.length < 6
                    ? "Пароль должен состоять как минимум из 6 символов"
                    : !latinaRegex.test(value)
                    ? formErrors.password = "Пароль должен состоять из латинских букв"
                    : "";
                break;
            case 'email':
                formErrors.email =
                  emailRegex.test(value)
                    ? ''
                    : 'Введите корректный E-mail';
                break;
            case 'phoneNum':
                formErrors.phoneNum =
                  value.length < 10
                    ? "Введите корректный номер мобильного телефона"
                    : "";
                break;
            default:
                break;
        }

        this.setState({
            formErrors, [name]: value
        }, () => console.log(this.state));
    };

    render(){
        return(
            <Switch>
                <Route exact path = '/' render={() => <Home/>}/>
                <Route path='/JobSear' render={() => <JobSear dataSet = {this.props.dataSet}/>}/>
                <Route path='/EmploySear' render={() => <EmploySear/>}/>
                <Route path='/About' render={() => <About/>}/>
                <Route path='/Help' render={() => <Help/>}/>
                <Route path='/Registration' render={() => <Registration
                    handleSubmit={this.handleSubmit} handleChange={this.handleChange}
                    formErrors={this.state} handleUserTypeSelect={this.handleUserTypeSelect}
                />}/>
            </Switch>
        );
    }
}

export default withRouter(Main);