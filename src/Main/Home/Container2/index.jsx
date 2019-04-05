import React, {Component} from 'react';
import {Container, ContainerBody, ArrowsContainer, ArrowLines} from './style';

export default class Container2 extends Component {
    redirect = e => {
        e.preventDefault();
        window.location = '/EmploySear/index'
    };
    render(){
        return(
            <Container>
                    <ContainerBody>
                        <div className="photo">
                            <p>"Hello, <span className="quote">Junior</span>!"</p>
                            <img src="./assets/images/coder.jpg" alt="Coder"/>
                        </div>
                        <div className="form">
                            <div className="title">
                                <h1>Найди сотрудника</h1>
                            </div>
                            <form action="">
                                <input type="text" className="textArea" placeholder="Введите ключевое слово" name="keyword"/>
                                <span className="oneSpan"></span>
                                <input type="text" className="textArea" placeholder="Введите город" name="city"/>
                                <span className="twoSpan"></span>
                            </form>
                            <div className="btn vacancy">
                                <button onClick={e => this.redirect(e)}>НАЙТИ СОТРУДНИКА</button>
                            </div>
                            <div className="btn summary">
                                <button>РАЗМЕСТИТЬ ВАКАНСИЮ</button>
                            </div>
                        </div>
                    </ContainerBody>

                    <ArrowsContainer>
                        <ArrowLines/>
                    </ArrowsContainer>
                </Container>
        );
    }
}