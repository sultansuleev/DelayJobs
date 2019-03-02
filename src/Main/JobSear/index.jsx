import React, {Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import {Container, UpperCon} from './style';
import Search from '../../common/Search_Sort/index';

export default class JobSear extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: [],
            exp: [],
            type: [],
            graph: [],
        }
    };

    componentDidMount(prevProps, prevState, snapshot) {
        console.log(this.props.dataSet);
    }


    render(){
        return(
          <Fragment>
              <Helmet>
                  <title>
                      Поиск вакансий
                  </title>
              </Helmet>
              <Container>
                  <UpperCon>
                      <div className="sear" onLoad={this.parse }>
                          <h2>
                              Поиск вакансий:
                          </h2>
                          <input type="text" placeholder="Введите ключевое слово"/>
                          <div className="underline"/>
                      </div>
                      <div className="sort">
                          {this.props.dataSet.map((dt, index) => (
                            <Search key = {index} dataSet = {dt}
                            />
                          ))}

                      </div>
                  </UpperCon>
              </Container>
          </Fragment>

        );
    }
}