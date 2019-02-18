import styled from 'styled-components';

const Head = styled.div `
    width: 93%;
    height: 7.606875em;
    display: grid;
    background-color: #000000 !important;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    position: sticky;
    top: 0;
    z-index: 9;
    transition: .2s ease-in;

    & a {
        font-family: Cunia, sans-serif;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        user-select: none;
    }

    .con {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: inherit;
    }

    & .logo, .job, .employ, .about, .help, .user {
        display: flex;
        align-items: center;
    }

    & .logo {
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
            content: url(../assets/images/svg/planet.svg);
            width: 5em;
            top: -4em;
            left: 2.1em;
        }
    }


    & .job {

    }

    & .employ {

    }

    & .about {

    }

    & .help{

    }

    & .user{
        -webkit-transition: ease 0.7s;
        -moz-transition: ease 0.7s;
        -ms-transition: ease 0.7s;
        -o-transition: ease 0.7s;
        transition: ease 0.7s;
        & img {
            width: 3.75em;
        }
    }

    & .user:hover {
        -webkit-transition: 0.7s ease;
        -moz-transition: 0.7s ease;
        -ms-transition: 0.7s ease;
        -o-transition: 0.7s ease;
        transition: 0.7s ease;
        transform: scale(1.14);
    }

    & .job, .employ, .about, .help:hover {
        > a {
            transition: 0.7s ease;
        }
        > a:hover {
            color: gray;
            transition: 0.7s ease;
        }
    }
`;

export {
    Head
};