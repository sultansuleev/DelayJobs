import React, {Fragment, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/index';
import Main from './Main/index';
import Footer from './Footer/index';
import {BrowserRouter} from 'react-router-dom';

class ContentGrand extends Component {
    state = {
        isVisible: false,
    };

    modalShow = () => {
        this.setState({
            isVisible: true,
        });
    };

    modalHide = () => {
        this.setState({
            isVisible: false,
        });
    };
    render(){
        return(
            <Fragment>
                <Header func = {this.modalShow}/>
                <Main isVisible = {this.state.isVisible} hide={this.modalHide}/>
                <Footer/>
            </Fragment>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <ContentGrand/>
    </BrowserRouter>
    , document.getElementById('root'));