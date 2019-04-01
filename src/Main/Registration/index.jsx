import React, {Component} from 'react';
import {Body, Form, Input, FirstName, LastName, UserName, Password, Email, PhoneNum, CheckBox, ErrorMessage} from './style';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const latinaRegex = RegExp(/^\s*(\w+)\s*$/);

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

export default class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            userName: null,
            password: null,
            email: null,
            phoneNum:null,
            formErrors: {
                firstName: "",
                secondName: "",
                userName: "",
                password:"",
                email: "",
                phoneNum:"",
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state)){
            console.log(`
                SUBMITTING
                First Name: ${this.state.firstName}
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
                  value.length < 3
                  ? "Имя должна состоять как минимум из 3 букв."
                  : "";
                break;
            case 'lastName':
                formErrors.lastName =
                  value.length < 3
                    ? "Фамилия должна состоять как минимум из 3 букв."
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
                  value.length < 11
                    ? "Номер мобильного телефона должна состоять как минимум из 11 цифр."
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
        const {formErrors} = this.state;

        return(
          <Body>
            <div className="signUp-contain">
                <div className="signUp">
                    <h1 className="title">Регистрация</h1>

                    <Form onSubmit={this.handleSubmit}>
                        <FirstName>
                            <Input name="firstName" type="text" placeholder="Имя" className="inputText" onChange={this.handleChange}/>
                            {formErrors.firstName.length > 0 && (
                              <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                            )}
                        </FirstName>
                        <LastName>
                            <Input name="secondName" type="text" placeholder="Фамилия" className="inputText" onChange={this.handleChange}/>
                            {formErrors.secondName.length > 0 && (
                              <ErrorMessage>{formErrors.secondName}</ErrorMessage>
                            )}
                        </LastName>
                        <Password>
                            <Input name="password" type="password" placeholder="Пароль" className="inputText" onChange={this.handleChange}/>
                            {formErrors.password.length > 0 && (
                              <ErrorMessage>{formErrors.password}</ErrorMessage>
                            )}
                        </Password>
                        <Email>
                            <Input name="email" type="text" placeholder="Email" className="inputText" onChange={this.handleChange}/>
                            {formErrors.email.length > 0 && (
                              <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                            )}
                        </Email>
                        <PhoneNum>
                            <Input name="phoneNum" type="text" placeholder="Номер мобильного телефона" className="inputText" onChange={this.handleChange}/>
                            {formErrors.phoneNum.length > 0 && (
                              <ErrorMessage>{formErrors.phoneNum}</ErrorMessage>
                            )}
                        </PhoneNum>

                        <div className="chk-box">
                            <input type="radio" name="toCheck" id="worker" value="Worker" className="regular inputRadio" onChange={this.handleChange}/>
                            <label htmlFor="worker" className="regular radVal" style={{marginBottom: '1em'}}>
                                Я СОИСКАТЕЛЬ
                            </label>
                            <input type="radio" name="toCheck" id="researcher" value="Researcher" className="regular inputRadio gap" onChange={this.handleChange}/>
                            <label htmlFor="researcher" className="regular radVal">
                                Я РАБОТАДАТЕЛЬ
                            </label>
                        </div>
                        <input type="submit" value="ЗАРЕГЕСТРИРОВАТЬСЯ" className="regular btn"/>
                    </Form>
                </div>

                <div className="agreements">
                    <p>
                        Нажимая «<span className="fill">ЗАРЕГИСТРИРОВАТЬСЯ</span>», вы подтверждаете, что ознакомлены,
                        полностью согласны и принимаете условия «<span className="fill">Соглашения об оказании услуг
                    по содействию в трудоустройстве (оферта)</span>»
                    </p>
                </div>
            </div>
          </Body>
        );
    }
}