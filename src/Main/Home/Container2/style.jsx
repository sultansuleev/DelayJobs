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

    & h1, button {
        user-select: none;
        outline: none;
    }

    & .con2 {
        width: inherit;
        height: 100%;
        display: grid;
        grid-template-columns: .8fr 1.2fr;

        & .photo {
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
        }
        & .form {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: white;
            z-index: 99;
            padding-top: 2em;

            .title {
                width: 45.283125em;
                margin: 0 auto 2em auto;

                & h1 {
                    font-family: Cunia, sans-serif;
                    font-weight: bold;
                    font-size: 72px;
                    margin: auto;
                }
            }

            & form {
                display: flex;
                flex-direction: column;
                width: 25em;
                height: 10em;
                margin: 0 auto 2.153125em auto;
                position: relative;
                color: white;

                & input {
                    height: 5em;
                    background: none;
                    border: none;
                    font-size: 24px;
                    font-family: Montserrat, sans-serif;
                    color: white;
                    outline: none;
                    opacity: 1;
                    transition: 0.3s ease;

                    & input:focus::placeholder{
                        opacity: 0;
                        transition: 0.3s ease;
                    }
                }

                & input::placeholder {
                    font-family: Cunia, sans-serif;
                }

                & span {
                    background: #C3C3C3;
                    border: 2px solid #C3C3C3;
                    width: 100%;
                    box-sizing: border-box;
                    position: absolute;
                    left: 1em;
                    top: 1em;
                }

                & .oneSpan {
                    left: 0;
                    top: 3.4em;
                }

                & .twoSpan {
                    left: 0;
                    top: 8.4em;
                }
            }

            .btn:hover {
                background-color: #FFFFFF;
                transition: .4s ease-in;
                & button {
                    color: #000000;
                }
                border: 3px solid #000000;
            }

            & button {
                transition: .4s ease;
                width: inherit;
                height: inherit;
                background-color: rgba(0, 0, 0, 0);
                color: white;
                font-size: 24px;
                font-family: Cunia, sans-serif;
                border: none;
            }

            & .vacancy {
                width: 25em;
                height: 4.4375em;
                border: 3px solid #FFFDFD;
                margin: 0 auto 2.125em auto;
            }

            & .summary {
                width: 25em;
                height: 4.375em;
                border: 3px solid #FFFDFD;
                margin: 0 auto;
            }
        }
    }
    .arrow-con2 {
        width: 8%;
        height: 100%;
        position: relative;
        margin: auto;

        @keyframes up-down-animation {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                -webkit-transform: translateY(-1em);
                -moz-transform: translateY(-1em);
                -ms-transform: translateY(-1em);
                -o-transform: translateY(-1em);
                transform: translateY(-1em);
            }
            60% {
                -webkit-transform: -.5em;
                -moz-transform: -.5em;
                -ms-transform: -.5em;
                -o-transform: -.5em;
                transform: -.5em;
            }
        }

        .animated-div {
            height: 100%;
        }

        .trans {
            transition: 2s ease;
            animation: 2s up-down-animation infinite;
        }

        .l1 {
            position: absolute;
            width: 4.73375em;
            height: 0;
            right: 0;
            top: 50%;

            border: 2px solid #FFFFFF;
            transform: matrix(0.71, -0.69, 0.73, 0.71, 0, 0) !important;
        }

        .l2 {
            position: absolute;
            width: 4.73375em;
            height: 0;
            left: 0;
            top: 50%;

            border: 2px solid #FFFFFF;
            transform: matrix(0.71, 0.69, -0.73, 0.71, 0, 0);
        }
    }
`;

export {Container}