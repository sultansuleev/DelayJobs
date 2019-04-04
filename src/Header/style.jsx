import styled from 'styled-components';

const HeadContainer = styled.header `
    width: 100%;
    height: 7.606875em;
    display: grid;
    background-color: #000000;
    position: sticky;
    top: 0;
    z-index: 9;
    transition: .2s ease-in;

    & a {
        font-family: Cunia, sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        user-select: none;
    }
`;

const HeadBody = styled.div`
    width: 93%;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    margin: auto;

    & a {
        font-family: Cunia, sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
        user-select: none;
    }
`;

const Source = styled.div`
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: inherit;
`;

const Logo = styled(Source)`
    height: 100%;
    position: relative;
    z-index: 99;
    > a {
        font-size: 48px;
        position: relative;
        z-index: 99;
    }
    > a::before{
        position: absolute;
        content: url(/assets/images/svg/planet.svg);
        width: 5em;
        top: -4em;
        left: 2.25em;;
    }
`;

const User = styled(Source)`
    -webkit-transition: ease 0.7s;
    -moz-transition: ease 0.7s;
    -ms-transition: ease 0.7s;
    -o-transition: ease 0.7s;
    transition: ease 0.7s;
    width: 3.75em;
    & img {
        width: 3.75em;
    }
    
    :hover {
        -webkit-transition: 0.7s ease;
        -moz-transition: 0.7s ease;
        -ms-transition: 0.7s ease;
        -o-transition: 0.7s ease;
        transition: 0.7s ease;
        transform: scale(1.14);
    }
`;

const Links = styled(Source)`
    > a {
        transition: 0.7s ease;
    }
    > a:hover {
        color: gray;
        transition: 0.7s ease;
    }
`;

export {
    HeadContainer,
    HeadBody,
    Container,
    User,
    Logo,
    Links
};