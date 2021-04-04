import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Application} from './App';

class ContentGrand extends Component {
    constructor(props){
        super(props);

        this.state = {
            isVisible: false,
        }
    }
    modalShow = (e) => {
        e.preventDefault();
        this.setState({
            isVisible: true,
        });
        document.body.style.overflow = "hidden";
    };

    modalHide = (e) => {
        e.preventDefault();
        this.setState({
            isVisible: false,
        });
        document.body.style.overflow = "visible";
    };

    render(){
        return(
          <Application modalShow={this.modalShow} modalHide={this.modalHide} isVisible={this.state.isVisible}/>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <ContentGrand/>
    </BrowserRouter>
    , document.getElementById('root'));