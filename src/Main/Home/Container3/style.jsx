import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
        height: 36em;
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        position: relative;
        z-index: 1;
        margin-bottom: 1em;

        & h1, li {
            user-select: none;
            outline: none;
            font-family: Cunia, sans-serif;
            color: #FFFFFF;
            font-weight: bold;
        }

        & .photo {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;

            > img {
                position: absolute;
                left: 1em;
                top: -8em;
                width: 46.218125em;
                z-index: 1;
            }
        }

        & .list {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            color: white;
            z-index: 99;
            position: relative;

            & .title {
                width: 52.25em;
                margin: 0 auto 2em 0;

                & h1 {
                    font-family: Cunia, sans-serif;
                    font-weight: bold;
                    font-size: 72px;
                    margin: auto;
                }
            }

            & ul {
                margin: 0;
                padding-left: 3em;
            }

            & ul > li {
                list-style-type: none;
                font-size: 36px;
            }
            
            @keyframes scaled {
                0% {
                    transform: scale(1.04);
                }
                50% {
                    transform: scale(0.96);
                }
                100% {
                    transform: scale(1.04);
                }
            }

            > img {
                width: 6.125em;
                position: absolute;
                bottom: 0;
                right: 4.25em;
                transition: 2s ease;
                -webkit-animation: scaled 2s infinite;
                -o-animation: scaled 2s infinite;
                animation: scaled 2s infinite;
            }

            > img:hover {
                filter: invert(0, 0);
            }
        }
`;

export {Container}