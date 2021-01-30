import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Tree from './tree.svg';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        background-image: url(${Tree});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh;
        min-width: 500px;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.9;
        width: 100%;
        height: 100%;
    }

    div{
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    input,button {
        outline: none;

    }
    
`;
