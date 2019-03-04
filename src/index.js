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