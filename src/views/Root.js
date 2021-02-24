import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navbar from 'components/Layouts/Navbar/Navbar';
import Ranking from 'components/Ranking/Ranking';
import Container from 'components/Layouts/Container/Container';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
        <Router>
            <Navbar />
            <Wrapper>
                <Switch>
                    <Route path="/" exact>
                        <Container title="Ranking">
                            <Ranking />
                        </Container>
                    </Route>
                    <Route path="/boxwar">
                        <h1>W budowie</h1>
                    </Route>
                    <Route path="/dices">
                        <h1>Już wkrótce</h1>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    </ThemeProvider>
);
export default App;
