import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Ranking from 'components/Ranking/Ranking';
import Container from 'components/Layouts/Container/Container';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Game from './Game/Game';
import { firebaseApp } from '../firebase';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Root = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPass, setErrorPass] = useState(null);
    const [hasAccount, setHasAccount] = useState(true);

    const handleLogout = () => {
        firebaseApp.auth().signOut();
    };

    const onAuthListener = () => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                clearErrors();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        onAuthListener();
    }, []);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setErrorEmail('');
        setErrorPass('');
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Wrapper>
                    <Switch>
                        <Route path="/" exact>
                            {user ? (
                                <Game handleLogout={handleLogout} />
                            ) : (
                                <Homepage
                                    user={user}
                                    setUser={setUser}
                                    email={email}
                                    setEmail={setEmail}
                                    password={password}
                                    setPassword={setPassword}
                                    hasAccount={hasAccount}
                                    setHasAccount={setHasAccount}
                                    errorPass={errorPass}
                                    setErrorPass={setErrorPass}
                                    errorEmail={errorEmail}
                                    setErrorEmail={setErrorEmail}
                                    clearErrors={clearErrors}
                                />
                            )}
                        </Route>
                        <Route path="/game" component={Game} />
                        <Route path="/game/luckycase">
                            <Container title="Ranking">
                                <Ranking />
                            </Container>
                        </Route>
                        <Route path="/game/boxwar">
                            <h1>W budowie</h1>
                        </Route>
                        <Route path="/game/dices">
                            <h1>Już wkrótce</h1>
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
};

export default Root;
