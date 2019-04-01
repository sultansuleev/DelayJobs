import React, {Component} from 'react';
import {Head, Container, User, Logo, Links} from './style';
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
};

    render(){
        return(
            <Head id="header" onLoad={this.scrolled()}>
                <Logo>
                    <NavLink to="/">Делай</NavLink>
                </Logo>
                <Container>
                    <Links>
                        <NavLink to="/JobSear">Ищу работу</NavLink>
                    </Links>
                    <Links>
                        <NavLink to="/EmploySear">Ищу сотрудника</NavLink>
                    </Links>
                    <Links>
                        <NavLink to="/About">О нас</NavLink>
                    </Links>
                    <Links>
                        <NavLink to="/Help">Помощь</NavLink>
                    </Links>
                    <User className="user" onClick={(e) => this.props.func(e)}>
                            <img src={'/assets/images/svg/user.svg'} alt="user"/>
                    </User>
                </Container>
            </Head>
        );
    }
}