/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Game from './Game/Game';
import { firebaseApp } from '../firebase';
import LuckyChests from './Game/LuckyChests/LuckyChests';
import Boxwars from './Game/Boxwars/Boxwars';
import LuckyDice from './Game/LuckyDice/LuckyDice';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
                                <Game
                                    handleLogout={handleLogout}
                                    gameComponent="playerPanel"
                                />
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
                        <Route path="/luckychests">
                            <Game>
                                <LuckyChests />
                            </Game>
                        </Route>
                        <Route path="/boxwars">
                            <Game>
                                <Boxwars />
                            </Game>
                        </Route>
                        <Route path="/luckydice">
                            <Game>
                                <LuckyDice />
                            </Game>
                        </Route>
                    </Switch>
                </Wrapper>
            </Router>
        </ThemeProvider>
    );
};

export default Root;
