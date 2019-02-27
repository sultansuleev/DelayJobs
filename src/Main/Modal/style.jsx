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
        display: flex;
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
            height: 18.9375rem;
            margin: auto;
            
            & .title {
                width: 8.6875rem;
                height: 3.5625rem;
                margin: auto auto 1rem auto;
                h2 {
                    font-size: 48px;
                    margin: 0;
                }
            }
            
            & .inForm {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                
                .inStream {
                    background: none;
                    font-family: Cunia, sans-serif;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 1rem;
                    outline: none;
                }
                
                & .inputtext {
                    width: 100%;
                    height: 1.375rem;
                    border: none;
                    border-bottom: 2px solid #000000;
                    margin-bottom: 2rem;
                }
                & inputtext::placeholder {
                    color: rgba(0, 0, 0, 0.4);
                } 
                
                .btn {
                    width: 7.125rem;
                    height: 2rem;
                    border: 2px solid #000000;
                    box-sizing: border-box;
                    margin: 0 auto 0.8125rem auto;
                }
                
                
                .linkTo {
                    width: 12rem;
                    height: 2rem;
                    border: 2px solid #000000;
                    margin: 0 auto;
                    padding: auto;
                    text-decoration: none;
                    color: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        
       
    }
`;

const Hidden = styled.div`
    display: none;
`;

export {ModalB, ModalHandle, Hidden}