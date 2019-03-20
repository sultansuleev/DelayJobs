import React, {Component} from 'react';
import {Block} from './style';

export default class Modal extends Component {
    render(){
        if(!this.props.isShown){
            return null;
        } else {
            document.body.style.overflow = "hidden";
        }
        return(
            <Block>
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
                            <form>
                                <input type="text" placeholder="EMAIL OR LOGIN" className="inStream inputText"/>
                                <input type="password" placeholder="PASSWORD" className="inStream inputText"/>
                                <input type="submit" value="ВОЙТИ" className="inStream btn btn-submit"/>
                                <input type="button" value="СОЗДАТЬ АККАУНТ" className="inStream btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </Block>
        );
    };
}