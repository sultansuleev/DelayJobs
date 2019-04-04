import React, {Component} from 'react';
import {Body, Form, Input, Grid, FirstName, LastName, UserName, Password, Email, PhoneNum, CheckBox, Button,ErrorMessage} from './style';
import UserTypeSelector from './SelectUserType/index';

export default class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            userTypeList: [
                {
                    name: "userType",
                    value: "worker",
                    text: "Я СОИСКАТЕЛЬ"
                },
                {
                    name: "userType",
                    value: "researcher",
                    text: "Я РАБОТАДАТЕЛЬ"
                }
            ],
        }
    }

    render(){
        const {formErrors} = this.props.formErrors;

        return(
          <Body>
            <div className="signUp-contain">
                <div className="signUp">
                    <h1 className="title">Регистрация</h1>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Grid>
                            <FirstName>
                                <Input name="firstName" type="text" placeholder="Имя" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.firstName.length > 0}/>
                                {formErrors.firstName.length > 0 && (
                                  <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                                )}
                            </FirstName>
                            <LastName>
                                <Input name="lastName" type="text" placeholder="Фамилия" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.lastName.length > 0}/>
                                {formErrors.lastName.length > 0 && (
                                  <ErrorMessage>{formErrors.lastName}</ErrorMessage>
                                )}
                            </LastName>
                        </Grid>

                        <Grid>
                            <UserName>
                                <Input name="userName" type="text" placeholder="Имя пользователя" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.userName.length > 0}/>
                                {formErrors.userName.length > 0 && (
                                  <ErrorMessage>{formErrors.userName}</ErrorMessage>
                                )}
                            </UserName>
                            <Password>
                                <Input name="password" type="password" placeholder="Пароль" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.password.length > 0}/>
                                {formErrors.password.length > 0 && (
                                  <ErrorMessage>{formErrors.password}</ErrorMessage>
                                )}
                            </Password>
                        </Grid>

                        <Grid>
                            <Email>
                                <Input name="email" type="text" placeholder="Email" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.email.length > 0}/>
                                {formErrors.email.length > 0 && (
                                  <ErrorMessage>{formErrors.email}</ErrorMessage>
                                )}
                            </Email>
                            <PhoneNum>
                                <Input name="phoneNum" type="text" placeholder="Номер мобильного телефона" onChange={e => this.props.handleChange(e)} nonValid = {formErrors.phoneNum.length > 0}/>
                                {formErrors.phoneNum.length > 0 && (
                                  <ErrorMessage>{formErrors.phoneNum}</ErrorMessage>
                                )}
                            </PhoneNum>
                        </Grid>

                        <CheckBox>
                            {this.state.userTypeList.map((dt, index)  => (
                              <UserTypeSelector
                                key={index} name={dt.name} value={dt.value}
                                text={dt.text} handleUserTypeSelect={this.props.handleUserTypeSelect}
                                onChange={this.props.handleChange}/>
                            ))}
                            {formErrors.userType.length > 0 && (
                              <ErrorMessage>{formErrors.userType}</ErrorMessage>
                            )}
                        </CheckBox>
                        <Button type="submit" value="ЗАРЕГЕСТРИРОВАТЬСЯ"/>
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