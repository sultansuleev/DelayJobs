import React, {Component} from 'react';
import {Selector, RadioButton, Span} from "./style";

export default class UserTypeSelector extends Component {
    render() {
        return(
          <Selector>
              <RadioButton>
                  <input type="radio" name={this.props.name} id={this.props.value} value={this.props.value} className="inputRadio" onChange={e => this.props.handleUserTypeSelect(e)}/>
                  <Span/>
                  <label htmlFor={this.props.value}>{this.props.text}</label>
              </RadioButton>
          </Selector>
        );
    }
}