import React, {Component} from 'react';
import {Head} from './style';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    scrolled = () =>{
    window.onscroll = function scrollFunc() {
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
            document.getElementById("header").style.height = "5em";
        } else {
            document.getElementById("header").style.height = "7.606875em";
        }
    }
}

    render(){
        return(
            <Head id="header" onLoad={this.scrolled()}>
                <div className="logo">
                    <NavLink to="/">Делай</NavLink>
                </div>
                <div className="con">
                    <div className="job">
                        <NavLink to="/JobSear">Ищу работу</NavLink>
                    </div>
                    <div className="employ">
                        <NavLink to="/EmploySear">Ищу сотрудника</NavLink>
                    </div>
                    <div className="about">
                        <NavLink to="/About">О нас</NavLink>
                    </div>
                    <div className="help">
                        <NavLink to="/Help">Помощь</NavLink>
                    </div>
                    <div className="user">
                        <div className="icon">
                            <img src="./assets/images/svg/user.svg" alt="user"/>
                        </div>
                    </div>
                </div>
            </Head>
        );
    }
}