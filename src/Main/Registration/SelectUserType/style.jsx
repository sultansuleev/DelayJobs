import styled from 'styled-components';

const Selector = styled.div``;

const RadioButton = styled.label`
    width: 100%;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    user-select: none;
    align-items: center;
    display: flex;
    margin-bottom: 1em;
    
    & input {
        width: 1.4rem;
        height: 1.4rem;
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        opacity: 0;
    }
    
    & input:checked ~ span:after {
    display: block;
    }
    
    p {
        margin: 0;
    }
`;

const Span = styled.span`
    width: 1.4em;
    height: 1.4em;
    margin: 0;
    border: 1px solid #c2c2c2;
    cursor: pointer;
    border-radius: 2px;
    box-sizing: border-box;
    
    :after{
      content: ' ';
      position: absolute;
      display:none;
      top: 0;
      left: 0;
      width: 1.4em;
      height: 1.4em;
      background-color: #808080;
      border-radius: 1px;
    }
`;

export {Selector, RadioButton, Span}