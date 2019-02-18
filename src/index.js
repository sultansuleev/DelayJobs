import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/index';
import Main from './Main/index';
import SignO from './Main/Sign/index';
import Footer from './Footer/index';
import {BrowserRouter} from 'react-router-dom';

export function rend(){
    
}

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Header />
            <Main />
            <Footer/>
        </Fragment>
    </BrowserRouter>
    , document.getElementById('root'));