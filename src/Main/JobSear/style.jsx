import styled from 'styled-components';

const Container = styled.div`
    
`;

const UpperCon = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1em;
    color: #fff;
    font-size: 36px;
    
    .sear {
    width: 100%;
    height: 3.5625em;
    display: flex;
    flex-direction: row;
        h2 {
            font-size: 48px;
            margin: 0;
        }
        
        input {
            width: 40.751em;
            padding-top: 1em;
            font-size: 36px;
        }
        input::placeholder {
            font-size: 36px;
            padding: 0;
            margin: 0;
        }
    }
    
    .sort {
    
    }
`;

export {Container, UpperCon};