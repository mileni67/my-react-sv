import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    htlm {
        box-sizing: border-box;
    }
*, ::after, ::before {
    box-sizing: inherit;
}
body {
    font-family: 'Inter' sans-serif;
}
`;
