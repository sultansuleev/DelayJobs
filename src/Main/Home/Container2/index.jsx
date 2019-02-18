import React, {Component} from 'react';
import {Container} from './style';

export default class Container2 extends Component {
    render(){
        return(
            <Container>
                    <div className="con2">
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
                                <button>НАЙТИ СОТРУДНИКА</button>
                            </div>
                            <div className="btn summary">
                                <button>РАЗМЕСТИТЬ ВАКАНСИЮ</button>
                            </div>
                        </div>
                    </div>
                    <div className="arrow-con2">
                        <div className="animated-div trans">
                            <div className="l1 "></div>
                            <div className="l2"></div>
                        </div>
                    </div>
                </Container>
        );
    }
}