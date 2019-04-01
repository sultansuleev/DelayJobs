import React, {Component} from 'react';
import {Block} from './style';

export default class Modal extends Component {
    locate = (e) => {
        e.preventDefault();
        window.location = './Registration/index.js';
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
                    }
                }
            }>
                <div className="blockModalContent">
                    <div className="left-content">
                        <img src="./assets/images/sign_bg.jpg" alt=""/>
                    </div>
                    <div className="right-content">
                        <div className="closeModal" onClick={(e) => this.props.modalHide(e)}>
                            <img src="./assets/images/CrossExit.svg" alt=""/>
                        </div>

                        <div className="signForm">
                            <div className="title">
                                <p>
                                    ВХОД
                                </p>
                            </div>
                            <form onSubmit={(e) => this.formValidate(e)}>
                                <input name="userName" type="text" placeholder="EMAIL OR LOGIN" className="inStream inputText"/>
                                <input name="password" type="password" placeholder="PASSWORD" className="inStream inputText"/>
                                <input type="submit" value="ВОЙТИ" className="inStream btn btn-submit"/>

                                <input type="button" value="СОЗДАТЬ АККАУНТ" className="inStream btn btn-reg" onClick={(e) => {this.locate(e)}}/>
                            </form>
                        </div>
                    </div>
                </div>
            </Block>
        );
    };
}