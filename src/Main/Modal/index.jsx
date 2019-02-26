import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {ModalB, Hidden} from './style';

export  default class Modal extends Component {

    render(){
        return(
              this.props.isVisible ?
                <ModalB>
                    <div className="modal-left-con">
                        <img src="./assets/images/sign_bg.jpg"/>
                    </div>
                    <div className="modal-right-con">
                        <button onClick={this.props.hide}>+</button>

                        <div className="content-handle">
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

                    </div>
                </ModalB>
                : <Hidden/>
        );
    }
};
