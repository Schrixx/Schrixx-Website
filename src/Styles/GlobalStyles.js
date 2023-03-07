import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    body {
        box-sizing: border-box;
        font-family: "Playfair Display", serif;
        font-weight: 500;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.pageBackgroundColor};
    }

    html {
        height: 100%;
    }

    // Changes background color of buttons on the page when active
    .active {
        background-color: #3b3b3b;
    }

`;
