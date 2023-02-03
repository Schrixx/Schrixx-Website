import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    body {
        box-sizing: border-box;
        font-family: "Playfair Display", serif;
        font-weight: 600;
        margin: 0;
        background: -webkit-gradient(320deg, 0% 0%, 0% 100%, from(#daded4), to(#a3bcb6));
        background: -webkit-linear-gradient(320deg, #daded4 0%, #a3bcb6 100%);
        background: -ms-linear-gradient(320deg, #daded4 0%, #a3bcb6 100%);
        background: -o-linear-gradient(320deg, #daded4 0%, #a3bcb6 100%);
        background: linear-gradient(320deg, #daded4 0%, #a3bcb6 100%);
        background: -moz-linear-gradient(320deg, #daded4 0%, #a3bcb6 100%);
    }

    html {
        height: 100%;
    }

`;
