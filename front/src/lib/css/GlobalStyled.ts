import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Tree from './tree.svg';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        box-sizing: border-box;
        background-color: #EFF7E7;
        width: 100vw;
        height: 100vh;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.9;
        width: 100%;
        min-height: 100%;
    }

    main{
        box-sizing: border-box;
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
        border: none;
        box-sizing: border-box;
    }
    
`;
