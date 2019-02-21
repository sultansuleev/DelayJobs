import React, {Component} from 'react';
import {Modal, ModalHandle} from './style';
import {NavLink} from 'react-router-dom';

export default class ModalAuth extends Component {
    render(){
        return(
                <Modal>
                    <div className="modal-left-con">
                        <img src="./assets/images/sign_bg.jpg"/>
                    </div>
                    <div className="modal-right-con">
                        <div className="title">
                            <h2>
                                ВХОД
                            </h2>
                        </div>

                        <div className="inForm">
                            <form>
                                <input type="text" placeholder="EMAIL OR LOGIN"/>
                                <input type="password" placeholder="PASSWORD"/>
                                <input type="submit" value="ВХОД"/>
                                <NavLink to="#" >
                                    СОЗДАТЬ АККАУНТ
                                </NavLink>
                            </form>

                            
                        </div>
                    </div>
                </Modal>
        );
    }
}