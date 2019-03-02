import styled from 'styled-components';

const Container = styled.div`
    width: 19rem;
    margin-right: 2rem;
    
    & #city {
        color: red;
        width: 12rem;
    }
`;

const Selected = styled.div`
    
`;

const Options = styled.div`
    font-size: 24px;
    :hover {
        background: #ffffff;
        color: #000000;
    }
`;

export {Container, Selected, Options};