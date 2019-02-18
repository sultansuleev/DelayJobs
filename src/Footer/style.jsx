import styled from 'styled-components';

const Foot = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6.5em;
    background-color: rgba(26, 26, 26, 1.000);
    position: relative;
    z-index: 99;

    & p {
        color: #555555;
        margin: 0;
        font-family: Cunia, sans-serif;
        font-size: 14px;
    }
`;

const FirstContent = styled.div`
    width: 22.5625em;
    height: 2.1875em;
    position: absolute;
    left: 1%;
    top: 25%;
`;

const SecondContent = styled.div`
    width: 11.375em;
    height: 3.125em;
    position: absolute;
    right: 1%;
    top: 25%;
`;

export {Foot, FirstContent, SecondContent};