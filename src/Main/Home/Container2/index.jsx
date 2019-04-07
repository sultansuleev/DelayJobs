import React, {Component} from 'react';
import {Container, ContainerBody, PhotoBody, FormContain, Title, Form, Input, Employ, Vacancy, ArrowsContainer, ArrowLines} from './style';

export default class Container2 extends Component {
    redirect = e => {
        e.preventDefault();
        window.location = '/EmploySear/index'
    };
    render(){
        return(
            <Container>
                    <ContainerBody>
                        <PhotoBody>
                            <p>"Hello, <span className="quote">Junior</span>!"</p>
                            <img src="/assets/images/coder.jpg" alt="Coder"/>
                        </PhotoBody>
                        <FormContain>
                            <Title>
                                <h1>Найди сотрудника</h1>
                            </Title>
                            <Form action="">
                                <Input type="text" className="textArea" placeholder="Введите ключевое слово" name="keyword"/>
                                <Input type="text" className="textArea" placeholder="Введите город" name="city"/>
                                <Employ type="button" value="НАЙТИ СОТРУДНИКА" onClick={e => this.redirect(e)}/>
                                <Vacancy type="button" value="РАЗМЕСТИТЬ ВАКАНСИЮ"/>
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