import styled from 'styled-components';

const Container = styled.div`
    width: 93%;
    height: 100%;
    margin: 0 auto;
    user-select: none;
`;

const UpperCon = styled.div`
    width: 100%;
    height: 9.1875rem;
    padding: 2.768125rem 0 2.875rem 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    color: #fff;
    font-family: Cunia, sans-serif;
    font-size: 36px;
    .sear {
        display: flex;
        flex-direction: row;
        height: 3.5625rem;
        position: relative;
        h2 {
            font-size: 48px;
            margin: 0 1rem 0 0;
        }
        input {
            font-size: 36px;
            width: 29.5625rem;
            background: none;
            border: none;
            position: relative;
            color: #fff;
            outline: none;
        }
        input::placeholder {
            color: #C3C3C3;
        }
        .underline::after {
            content: " ";
            border-bottom: 1px solid #fff;
            width: 32.75125rem;
            height: 0;
            position: absolute;
             top: 3rem;
             left: 11.6em;
        }
        
    }
    
    .sort {
    
    }
`;

export {Container, UpperCon};