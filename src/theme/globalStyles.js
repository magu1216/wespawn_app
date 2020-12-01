import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    :root {
        --upload-red: #F20039;
        --lfg-cyan: #1BB5AB;
        --friendlist-blue: #446DFD;
    }

    body {
        background-color: #404040;
        font-family: 'Roboto', sans-serif;
    }

`;

export default GlobalStyle;
