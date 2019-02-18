import React, {Component} from 'react';
import {Container} from './style';

export default class Container1 extends Component {
    render(){
        return(
            <Container>
                    <div className="con1">
                        <div className="photo">
                            <img src="./assets/images/cosmo2.jpeg" alt="Cosmo-Homo-Sapiens"/>
                        </div>
                        <div className="form">
                            <div className="title">
                                <h1>Найди работу мечты</h1>
                            </div>
                            <form action="">
                                <input type="text" placeholder="Введите ключевое слово" name="keyword"/>
                                <span className="oneSpan"></span>
                                <input type="text" placeholder="Введите город" name="city"/>
                                <span className="twoSpan"></span>
                            </form>
                            <div className="btn vacancy">
                                <button>НАЙТИ ВАКАНСИЮ</button>
                            </div>
                            <div className="btn summary">
                                <button>РАЗМЕСТИТЬ РЕЗЮМЕ</button>
                            </div>
                        </div>
                    </div>

                    <div className="arrow-con1">
                        <div className="animated-div trans">
                            <div className="l1 "></div>
                            <div className="l2"></div>
                        </div>
                    </div>
                </Container>
        );
    }
}