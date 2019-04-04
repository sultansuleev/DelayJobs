import React, {Component} from 'react';
import {Block, ModalContent, LeftSide_Content, RightSide_Content, CloseModal, SignUpForm, Title, Form, FormInput, Button, SubmitButton} from './style';

export default class Modal extends Component {
    locate = (e) => {
        e.preventDefault();
        window.location = '/Registration/index.js';
    };

    formValidate = (e) => {
        e.preventDefault();

        console.log(e.target.userName.value)
    };

    render(){
        if(!this.props.isShown){
            return null;
        } else {
            document.body.style.overflow = "hidden";
        }
        return(
            <Block id="subject" onClick={
                (e) => {
                    if (e.target === document.getElementById('subject')){
                        this.props.modalHide(e);
                    }}}>

                <ModalContent>
                    <LeftSide_Content/>
                    <RightSide_Content>
                        <CloseModal onClick={(e) => this.props.modalHide(e)}>
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
                    </RightSide_Content>
                </ModalContent>
            </Block>
        );
    };
}