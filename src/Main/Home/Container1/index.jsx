import React, {Component} from 'react';
import {Container} from './style';
import {NavLink} from 'react-router-dom';
import {graphql, buildSchema} from 'graphql';

export default class Container1 extends Component {
    redirect = () => {
      return(
        <NavLink to= "/JobSear"/>
      );
    };

    hello = () => {
        var schema = buildSchema(`
        type Query {
        hello: String
       }`);

        var root = { hello: () => 'Hello world!' };

        graphql(schema, '{ hello }', root).then((response) => {
            console.log(response);
        });
    };

    render(){
        return(
            <Container>
                    <div className="con1" onLoad={this.hello}>
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
                                <button onClick={() => {this.redirect()}}>НАЙТИ ВАКАНСИЮ</button>
                            </div>
                            <div className="btn summary">
                                <button value="/">РАЗМЕСТИТЬ РЕЗЮМЕ</button>
                            </div>
                        </div>
                    </div>

                    <div className="arrow-con">
                        <div className="line-arrow">

                        </div>
                    </div>

                </Container>
        );
    }
}