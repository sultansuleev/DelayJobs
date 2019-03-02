import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import {Container, UpperCon} from './style';

export default class EmploySear extends Component {
    render(){
        return(
          <Fragment>
              <Helmet>
                  <title>
                      Поиск сотрудника
                  </title>
              </Helmet>
              <Container>
                  <UpperCon>
                      <div className="sear">
                          <h2>
                              Поиск сотрудника:
                          </h2>
                          <input type="text" placeholder="Введите ключевое слово"/>
                          <div className="underline"/>
                      </div>
                      <div className="sort">

                      </div>
                  </UpperCon>
              </Container>
          </Fragment>
        );
    }
}