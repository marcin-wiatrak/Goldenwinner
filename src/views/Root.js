import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navbar from 'components/Layouts/Navbar/Navbar';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Wrapper>
            <h1>Global style</h1>
        </Wrapper>
    </ThemeProvider>
);
export default App;
