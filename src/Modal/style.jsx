import styled from 'styled-components';

const Block = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    z-index: 99;
`;

const ModalContent = styled.div`
    width: auto;
    height: 31.8125rem;
    display: flex;
    position: relative;
    top: 25%;
    left: 32%;
    z-index: 9
`;

const LeftSide_Content = styled.div`
    width: 21rem;
    height: 100%;
    background: url("/assets/images/sign_bg.jpg") no-repeat;
`;

const RightSide_Content = styled.div`
    width: 23.6875rem;
        height: 100%;
        background: #fff;
        position: relative;
        display: flex;
`;

const CloseModal = styled.div`
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
`;

const SignUpForm = styled.div`
    width: 15rem;
    height: 21.4375rem;
    margin: auto;
`;

const Title = styled.div`
    font-size: 48px;
    font-family: Cunia, sans-serif;
    font-weight: bold;
    width: 8.75rem;
    margin: auto auto .5em auto;
    
    & p {
        margin: 0;
    }
`;

const Form = styled.form`
    height: 14.3125rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    font-size: 18px;
    color: black;
    border: 0;
    font-family: Cunia, sans-serif;
    font-weight: bold;
    outline: none;
`;

const FormInput = styled(Input)`
    width: 100%;
    height: 1.375rem;
    font-family: Montserrat, sans-serif;
    border-bottom: 1px solid #000;
    margin-bottom: 22px;
    margin-top: 22px;
    
    ::placeholder {
        color: rgba(0, 0, 0, 0.4);
        font-family: Montserrat, sans-serif;
    }
`;

const Button = styled(Input)`
    width: 12rem;
    margin: 0 auto;
    border: 2px solid #000;
    transition: 1s ease;
    text-decoration: none;
    text-align: center;
    
    :hover {
        transition: 1s ease;
        color: #fff;
        background: #000;
    }
`;

const SubmitButton = styled(Button)`
    width: 7.125rem;
    margin: 0.7em auto 1.1rem auto;
`;

export {Block, ModalContent, LeftSide_Content, RightSide_Content, CloseModal, SignUpForm, Title, Form, FormInput, Button, SubmitButton};