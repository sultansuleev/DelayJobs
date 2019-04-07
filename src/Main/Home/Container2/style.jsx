import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 45em;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 7.9375em;
    position: relative;
    z-index: 1;
    margin-bottom: 12em;
`;

const ContainerBody = styled.div`
    width: inherit;
    height: 100%;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
`;

const PhotoBody = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
    & p {
        user-select: none;
        font-size: 48px;
        font-family: "Courier New", serif;
        color: #ffffff;
        position: relative;
        top: 12em;
        left: 3.5em;
        z-index: 2;
        width: 10em;

        & span{
            color: #19fc05;
        }
    }

    > img {
        position: absolute;
        left: -1em;
        top: -3em;
        width: 51.14875em;
        height: 52.5em;
        z-index: 0;
        user-select: none;
    }
`;

const FormContain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 99;
    padding-top: 2em;
`;

const Title = styled.div`
    width: 45.283125em;
    margin: 0 auto 2em auto;

    & h1 {
        font-family: Cunia, sans-serif;
        font-weight: bold;
        font-size: 72px;
        margin: auto;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 25em;
    height: 21em;
    margin: 0 auto 2.153125em auto;
    position: relative;
    color: white;
`;

const Input = styled.input`
    height: 2em;
    background: none;
    border: none;
    font-size: 24px;
    font-family: Montserrat, sans-serif;
    color: white;
    outline: none;
    opacity: 1;
    transition: 0.3s ease;
    border-bottom: 4px solid #C3C3C3;
    margin-bottom: 2rem;
    
    ::placeholder {
        color: #C3C3C3;
        font-family: Cunia, sans-serif;
    }
                
    :focus::placeholder{
        opacity: 0;
        transition: 0.3s ease;
    }
`;

const Button = styled.input`
    width: 100%;
    height: 4.325rem;
    border: 3px solid #FFFDFD;
    transition: .4s ease;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    font-size: 24px;
    font-family: Cunia, sans-serif;
    
    :hover {
        background-color: #FFFFFF;
        transition: .4s ease-in;
        color: #000000;
        border: 3px solid #000000;
    }
`;

const Employ = styled(Button)`
    margin: 1.125em 0;
`;

const Vacancy = styled(Button)`
    margin: auto 0;
`;

const ArrowsContainer = styled.div`
    position: relative;
    width: 4.4675rem;
    margin: auto;
    height: 4.4675rem;
    top: 50%;
    transition: 2s ease;
    animation: 2s up-down-animation infinite;
    
    @keyframes up-down-animation {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) ;
        }
        40% {
            -webkit-transform: translateY(-1em);
            -moz-transform: translateY(-1em);
            -ms-transform: translateY(-1em);
            -o-transform: translateY(-1em);
            transform: translateY(-1em);
        }
        60% {
            -webkit-transform: translateY(-.5em);
            -moz-transform: translateY(-.5em);
            -ms-transform: translateY(-.5em);
            -o-transform: translateY(-.5em);
            transform: translateY(-.5em);
        }
    }
`;

const ArrowLines = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
    font-size: 12px;
    width: 100%;
    height: 100%;
    margin: auto;
    border-top: 5px solid #FFFFFF;
    border-left: 5px solid #FFFFFF;
    transform: rotate(-137deg) skew(-5deg);
`;

export {Container, ContainerBody, PhotoBody, FormContain, Title, Form, Input, Employ, Vacancy, ArrowsContainer, ArrowLines}