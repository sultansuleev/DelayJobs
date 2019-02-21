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

    popUpCalc = (e) => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
        console.log(this.state.isVisible);
    };

    render(){
        return(
            <Fragment>
                <Header func = {this.popUpCalc}/>
                <Main isVisible = {this.state.isVisible}/>
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