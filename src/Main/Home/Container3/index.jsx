import React, {Component} from 'react';
import {Container} from './style';

export default class Container3 extends Component {
    render(){
        return(
            <Container>
                        <div className="photo">
                            <img src="./assets/images/svg/Logo1.svg" alt="Jobs Delay"/>
                        </div>
                        <div className="list">
                            <div className="title">
                                <h1>Делай JOBS</h1>
                            </div>
                            <ul>
                                <li>- Большой выбор вакансий</li>
                                <li>- Экономия времени и усилий</li>
                                <li>- Быстрое трудоустройство</li>
                                <li>- Удобство</li>
                                <li>- Эффективность</li>
                            </ul>
                            <img src="./assets/images/svg/Vector.svg" alt="Up" onClick={this.props.func}/>
                        </div>
                </Container>
        );
    }
}