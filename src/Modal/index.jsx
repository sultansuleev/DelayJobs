import React, {Component} from 'react';
import {Block, ModalContent, LeftSideContent, RightSideContent, CloseModal, SignUpForm, Title, Form, FormInput, Button, SubmitButton} from './style';

export default class Modal extends Component {
    locate = (e) => {
        e.preventDefault();
        window.location = '/Registration/index';
    };

    formValidate = (e) => {
        e.preventDefault();

        console.log(e.target.userName.value)
    };

    render(){
        return(
            <Block>
                <ModalContent>
                    <LeftSideContent/>
                    <RightSideContent>
                        <CloseModal onClick={() => this.props.handleClose(false)}>
                            <img src="/assets/images/CrossExit.svg" alt=""/>
                        </CloseModal>

                        <SignUpForm>
                            <Title>
                                <p>
                                    ВХОД
                                </p>
                            </Title>
                            <Form onSubmit={(e) => this.formValidate(e)}>
                                <FormInput name="login" type="text" placeholder="EMAIL OR USERNAME" className="inStream inputText"/>
                                <FormInput name="password" type="password" placeholder="PASSWORD" className="inStream inputText"/>
                                <SubmitButton type="submit" value="ВОЙТИ" className="inStream btn btn-submit"/>

                                <Button type="button" value="СОЗДАТЬ АККАУНТ" className="inStream btn btn-reg" onClick={(e) => {this.locate(e)}}/>
                            </Form>
                        </SignUpForm>
                    </RightSideContent>
                </ModalContent>
            </Block>
        );
    };
}