import React, {Component} from 'react';
import {Container, ContainerBody, PhotoBody, FormContain, Title, Form, Input, Vacancy, Summary, ArrowsContainer, ArrowLines} from './style';

export default class Container1 extends Component {
    redirect = e => {
        e.preventDefault();
        window.location = '/JobSear/index.js';
    };

    render(){
        return(
            <Container>
                    <ContainerBody onLoad={this.hello}>
                        <PhotoBody>
                            <img src="/assets/images/cosmo2.jpeg" alt="Cosmo-Homo-Sapiens"/>
                        </PhotoBody>
                        <FormContain>
                            <Title>
                                <h1>Найди работу мечты</h1>
                            </Title>
                            <Form>
                                <Input type="text" placeholder="Введите ключевое слово" name="keyword"/>
                                <Input type="text" placeholder="Введите город" name="city"/>
                                <Vacancy type="button" value="НАЙТИ ВАКАНСИЮ" onClick={(e) => {this.redirect(e)}}/>
                                <Summary type="button" value="РАЗМЕСТИТЬ РЕЗЮМЕ"/>
                            </Form>
                        </FormContain>
                    </ContainerBody>

                    <ArrowsContainer>
                        <ArrowLines/>
                    </ArrowsContainer>

                </Container>
        );
    }
}