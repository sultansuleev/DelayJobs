import React, {Component} from 'react';
import {Container, UpperCon} from './style';

export default  class JobSear extends Component {
    render(){
        return(
          <Container>
              <UpperCon>
                  <div className="sear">
                      <h2>
                          Поиск вакансий:
                      </h2>
                      <input type="text" placeholder="Введите ключевое слово"/>
                      <div className="underline"/>
                  </div>
                  <div className="sort">

                  </div>
              </UpperCon>
          </Container>
        );
    }
}