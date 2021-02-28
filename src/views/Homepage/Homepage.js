import React, { useEffect, useState } from 'react';
import Login from 'components/Login/Login';
import { firebaseApp } from '../../firebase';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/images/logo_export.svg';

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        60deg,
        #001845 0%,
        #001233 65%,
        #023e7d 65%,
        #023e7d 100%
    );
`;

const Container50 = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoMain = styled(Logo)`
    width: 500px;
    margin: 0 auto;
    display: block;
    /* svg {
        width: 100%;
    } */
`;

const ParagraphMain = styled.p`
    width: 90%;
    color: ${({ theme }) => theme.colors.gray1};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin: 0 auto;
    text-align: center;
`;

const Homepage = (props) => {
    return (
        <Wrapper>
            <Container50>
                <div>
                    <LogoMain />
                    <ParagraphMain>
                        Zbieraj pieniądze i ekwipunek.
                        <br />
                        Bądź najbogatszym graczem na koniec miesiąca!
                    </ParagraphMain>
                </div>
            </Container50>
            <Container50>
                <Login
                    user={props.user}
                    setUser={props.setUser}
                    email={props.email}
                    setEmail={props.setEmail}
                    password={props.password}
                    setPassword={props.setPassword}
                    hasAccount={props.hasAccount}
                    setHasAccount={props.setHasAccount}
                    errorPass={props.errorPass}
                    setErrorPass={props.setErrorPass}
                    errorEmail={props.errorEmail}
                    setErrorEmail={props.setErrorEmail}
                    clearErrors={props.clearErrors}
                />
            </Container50>
        </Wrapper>
    );
};

export default Homepage;
