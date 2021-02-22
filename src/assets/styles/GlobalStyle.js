import { createGlobalStyle } from 'styled-components';
import bg from 'assets/images/bg_dark.png';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: url(${bg});
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;
