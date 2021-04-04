import React, {Fragment, Component, useState, useEffect} from 'react';
import Header from './Header/index';
import Main from './Main/index';
import Footer from './Footer/index';
import {Modal} from 'react-bootstrap';
import ModalContent from './Modal/index';
import { Overlay } from 'react-portal-overlay';


export const Application = (props) => {
    const [dataSet, setDataSet] = useState([]);
    const [open, setOpen] = useState(false);

    const handleDS = (obj) => setDataSet(obj);


    useEffect(()=> {
        let obj = require('./data/db');
        handleDS(obj);
    })

    return(
        <Fragment>
            <div className={'mainComp'}>
                <Header func = {props.modalShow} handleShow = {setOpen}/>
                <Main isVisible = {props.isVisible} hide={props.modalHide} dataSet = {dataSet}/>

            </div>
            <Footer/>
            <Overlay className={'custOverlay'} open={open} onClose={() => setOpen(false)}>
                <ModalContent handleClose = {setOpen}/>
            </Overlay>
        </Fragment>
    );
}