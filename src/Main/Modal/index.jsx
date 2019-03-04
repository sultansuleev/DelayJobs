import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {ModalB, Hidden} from './style';

export  default class Modal extends Component {

    render(){
        return(
              this.props.isVisible ?
                <ModalB>
                    <div className="modal-left-con">
                        <img src="./assets/images/sign_bg.jpg" alt="lorem"/>
                    </div>
                    <div className="modal-right-con">
                        <button onClick={(e) => this.props.hide(e)}>+</button>

                        <div className="content-handle">
                            <div className="title">
                                <h2>
                                    ВХОД
                                </h2>
                            </div>

                            <form className="inForm">
                                <input type="text" placeholder="EMAIL OR LOGIN" className="inStream inputtext"/>
                                <input type="password" placeholder="PASSWORD" className="inStream inputtext"/>
                                <input type="submit" value="ВХОД" className="inStream btn"/>
                                <NavLink to="/Registration" className="inStream linkTo">
                                        СОЗДАТЬ АККАУНТ
                                </NavLink>
                            </form>
                        </div>

                    </div>
                </ModalB>
                : <Hidden/>
        );
    }
};
