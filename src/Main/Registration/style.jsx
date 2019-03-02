import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #000000;
  
    .signUp-contain {
        width: 30.9375rem;
        height: 100%;
        margin: 3.8125rem auto 4.375rem auto;
        
        .signUp {
            width: 22.8125rem;
            margin: auto auto 2.3125rem;
            display: flex;
            flex-direction: column;
            
            & .title {
               font-size: 48px;
               margin: 0;
               padding: 2rem 0 2.375rem 0;
            }
            
            & form {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
             
                & .regular {
                    font-family: Cunia, sans-serif;
                    font-weight: bold;
                    color: #000000;
                    font-size: 18px;
                    outline: none;
                }
             
                & .inputText {
                    border: none;
                    border-bottom: 1px solid #000000;
                    margin-bottom: 2rem;
                }
             
                & .inputText::placeholder {
                    color: #999999;
                }
                
                .chk-box {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 2.0625rem;
                    
                    & input {
                        margin: 0 .2em 0 0;
                    }
                    
                    .gap {
                        margin-left: 1em;
                    }
                }
            }
            
            & .btn {
                width: 15.625rem;
                height: 3.125rem;
                margin: auto;
                border: 3px solid #000000;
                font-size: 18px;
                transition: .4s ease;
            }
            
            & .btn:hover {
                background: #000000;
                color: #ffffff;
                border: 5px solid #ffffff;
                transition: .4s ease-in;
            }
            
            
        }
        
        .agreements {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            
            
            & p {
                font-size: 14px;
                font-family: Cunia, sans-serif;
                font-weight: bold;
                
                .fill {
                    color: rgba(42, 127, 226, 1.000);
                }
            }
           
        }
    }
    
    
    
    
`;

export {Body};