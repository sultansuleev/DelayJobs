import styled from 'styled-components';

const Block = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    z-index: 99;
    
    .blockModalContent {
        width: auto;
        height: 31.8125rem;
        display: flex;
        position: relative;
        top: 25%;
        left: 32%;
        z-index: 9999;
    }
    
    
    
    .left-content {
        width: 21rem;
        height: 100%;
        
        > img {
          width: 100%;
          height: 100%;  
        }
    }
    .right-content {
        width: 23.6875rem;
        height: 100%;
        background: #fff;
        position: relative;
        display: flex;
        
        & .closeModal {
            height: 0;
            position: absolute;
            right: 0.75rem;
            top: 0.75rem;
            
            & img {
                font-size: 34px;
                color: #000;
                cursor: pointer;
                margin: 0;
            }
        }
        
        & .signForm {
            width: 15rem;
            height: 21.4375rem;
            margin: auto;
            
            & .title {
                font-size: 48px;
                font-family: Cunia, sans-serif;
                font-weight: bold;
                width: 8.75rem;
                margin: auto auto .5em auto;
                
                & p {
                    margin: 0;
                }
            }
            
            & form {
                height: 14.3125rem;
                width: 100%;
                display: flex;
                flex-direction: column;
                
                & .inStream {
                    font-size: 18px;
                    color: black;
                    border: 0;
                    font-family: Cunia, sans-serif;
                    font-weight: bold;
                    outline: none;
                }
                
                & .inputText {
                    width: 100%;
                    height: 1.375rem;
                    font-family: Montserrat, sans-serif;
                    border-bottom: 1px solid #000;
                    margin-bottom: 22px;
                    margin-top: 22px;
                    
                }
                
                & .inputText::placeholder {
                    color: rgba(0, 0, 0, 0.4);
                    font-family: Montserrat, sans-serif;
                }
                
                & .btn {
                    width: 12rem;
                    margin: 0 auto;
                    border: 2px solid #000;
                    transition: 1s ease;
                    text-decoration: none;
                    text-align: center;
                }
                
                & .btn-submit {
                    width: 7.125rem;
                    margin: 0.7em auto 1.1rem auto;
                }
                
                .btn:hover {
                    transition: 1s ease;
                    color: #fff;
                    background: #000;
                }
            }
        }
    }
`;

export {Block};