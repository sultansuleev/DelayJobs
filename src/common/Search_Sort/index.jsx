import React, {Component} from 'react';
import {Container, Selected, Options} from './style';

export default class Search extends Component {
    state = {
        collapsed: false,
        selected: this.props.dataSet[0].name
    };

    showList = () => {
      this.setState({
          collapsed: !this.state.collapsed
      });
    };

    componentDidMount(prevProps, prevState, snapshot) {
        //this.props.dataSet.map((dt, index) => (console.log(dt)));
    }

    listener = async(e) => {
        this.setState({
            collapsed: !this.state.collapsed,
            selected: e.name
        })
    };

    render(){
        return(
          <Container id = {this.props.dataSet[0].name === "Город" ? "city" : undefined}>
              <Selected onClick = {() => {this.showList()}}>
                  {this.state.selected}
              </Selected>
              {this.state.collapsed ? this.props.dataSet.map((dt, index) => (
                <Options key={index} onClick={() => this.listener(dt)}>
                    {dt.name}
                </Options>
              )): null}

          </Container>
        );
    }
}