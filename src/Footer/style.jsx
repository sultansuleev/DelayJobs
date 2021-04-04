import styled from 'styled-components';

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: 6.5em;
  padding: 0 3em;
  background-color: rgba(26, 26, 26, 1.000);
  align-items: center;
  flex-shrink: 0;

  & span {
    color: #555555;
    margin: 0;
    font-family: Cunia, sans-serif;
    font-size: 14px;
  }
`;

const FirstContent = styled.address`
  width: max-content;
  display: flex;
  flex-direction: column;
`;

const SecondContent = styled.address`
  width: max-content;
  display: flex;
  flex-direction: column;
`;

export {Foot, FirstContent, SecondContent};