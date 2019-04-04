import styled from 'styled-components';

const Body = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    border: 1px solid #000000;
  
    .signUp-contain {
        width: 50%;
        height: 100%;
        margin: 3.8125rem auto 4.375rem auto;
        
        .signUp {
            width: 67%;
            margin: auto auto 2.3125rem;
            display: flex;
            flex-direction: column;
            
            & .title {
               font-size: 48px;
               margin: 0;
               padding: 2rem 0 2.375rem 0;
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

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

`;

const InputMain = styled.div`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 18px;
    outline: none;
    margin-bottom: 2rem;
    
`;

const Input = styled.input`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.nonValid ? 'red' : '#000'};
    display: flex;
    flex-direction: column;
    transition: 1s ease;
    
    
    ::placeholder {
        color: #999999;
    }
`;

const Button = styled.input`
    width: 15.625rem;
    height: 3.125rem;
    margin: auto;
    border: 3px solid #000000;
    font-size: 18px;
    font-weight: bold;
    transition: .4s ease;
   
    :hover {
        background: #000000;
        color: #ffffff;
        border: 5px solid #ffffff;
        transition: .4s ease-in;
    }
`;

const Grid = styled(InputMain)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const FirstName = styled(InputMain)``;

const LastName = styled(InputMain)``;

const UserName = styled(InputMain)``;

const Password = styled(InputMain)``;

const Email = styled(InputMain)``;

const PhoneNum = styled(InputMain)``;

const CheckBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 4rem 2.0625rem 4rem;
    
`;



const ErrorMessage = styled.span`
    color: red;
    font-size: 0.75em;
    
`;

export {Body, Form, Input, Grid, FirstName, LastName, UserName, Password, Email, PhoneNum, CheckBox, Button, ErrorMessage};