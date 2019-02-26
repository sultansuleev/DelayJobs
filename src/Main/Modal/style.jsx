import styled from 'styled-components';

const ModalHandle = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    display: block;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    float: right;
    

    & .clearing {
        clear: both;
        content: " ";
        display: table;
    }
`;

const ModalB = styled.div`
    width: 44.6875em;
    height: 31.8125em;
    position: absolute;
     top: 25%;
    left: 32%;
    display: grid;
    grid-template-columns: .6fr 1.4fr;
    background-color: rgba(255, 255, 255, 1.000);
    z-index: 9;
    overflow: hidden;

    & .modal-left-con {

    }

    & .modal-right-con {
        position: relative;
        > button {
            outline: none;
            position: absolute;
            top: 0;
            right: 0;
            font-size: 36px;
            border: none;
            background: none;
            transform: rotate(-45deg);
        }
        
        .content-handle {
            width: 15.0625rem;
            height: 18.4375rem;
            margin: auto;
            
            & .title {
                width: 8.6875rem;
                height: 3.5625rem;
                margin: auto;
                h2 {
                    font-size: 48px;
                    margin: 0;
                }
            }
        }
        
       
    }
`;

const Hidden = styled.div`
    display: none;
`;

export {ModalB, ModalHandle, Hidden}