import styled from 'styled-components';

const ModalHandle = styled.div`
    width: 100%;
    height: inherit;
    margin: 0;
    display: block;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    position: relative;


    & .clearing {
        clear: both;
        content: " ";
        display: table;
    }
`;

const Modal = styled.div`
    width: 44.6875em;
    height: 31.8125em;
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    grid-template-columns: .6fr 1.4fr;
    background-color: rgba(255, 255, 255, 1.000);
    z-index: 9;
    overflow: visible;

    & .modal-left-con {

    }

    & .modal-right-con {

    }
`;

export {Modal, ModalHandle}