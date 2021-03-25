import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Tree from './tree.svg';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
    }
    
    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EFF7E7;
        opacity: 0.9;
        width: 100%;
        min-height: 100%;
        word-break: keep-all;
        white-space:pre-wrap;
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
