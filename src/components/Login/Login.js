/* eslint-disable default-case */
import React from 'react';
// import { Link } from '@reach/router';
import Container from 'components/Layouts/Container/Container';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle, firebaseApp } from '../../firebase';

const Form = styled.form`
    padding: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderBox};
`;

const Input = styled.input`
    width: 100%;
    padding: 20px 15px;
    margin-bottom: 20px;
    border: none;
    font-size: ${({ theme }) => theme.fontSize.xl};
    background-color: ${({ theme }) => theme.colors.white}22;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    text-align: center;
    border-radius: 4px;

    ::placeholder {
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        font-size: ${({ theme }) => theme.fontSize.l};
        text-align: center;
    }
    &:focus,
    &:active {
        background-color: ${({ theme }) => theme.colors.black}22;
    }
`;

const Button = styled.button`
    width: 90%;
    outline: none;
    background-color: ${({ theme }) => theme.colors.blue5};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 15px;
    margin: 10px auto;
    display: block;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 4px;
    transition: 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue3};
    }
`;

const OtherLoginServices = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white}22;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    margin: 30px auto 15px auto;
    padding: 15px;
    transition: 0.2s ease;
    border-radius: 3px;
    cursor: pointer;

    svg {
        height: 20px;
        width: 20px;
        font-size: 20px;
        transition: 0.5s ease;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.black}22;
    }
`;

const AlreadyRegisteredParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 25px;
    animation: 1s ease opa forwards;

    span {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        transition: 0.3s ease;
        cursor: pointer;
        font-weight: 700;

        :hover {
            color: ${({ theme }) => theme.colors.gray4};
        }
    }

    @keyframes opa {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const Login = (props) => {
    const {
        user,
        email,
        setEmail,
        password,
        setPassword,
        hasAccount,
        setHasAccount,
        errorPass,
        setErrorPass,
        errorEmail,
        setErrorEmail,
        clearErrors,
    } = props;

    const handleLogin = (event) => {
        event.preventDefault();
        clearErrors();
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setErrorEmail(err.message);
                        break;
                    case 'auth/wrong-password':
                        setErrorPass(err.message);
                        break;
                }
            });
    };

    const handleRegister = (event) => {
        event.preventDefault();
        clearErrors();
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/email-already-in-use':
                        setErrorEmail(err.message);
                        break;
                    case 'auth/weak-password':
                        setErrorPass(err.message);
                        break;
                }
            });
    };

    const hasAccountHandler = () => {
        setHasAccount(!hasAccount);
    };

    return (
        <Container
            title={hasAccount ? 'Logowanie' : 'Rejestracja'}
            width="500px"
        >
            <Form>
                <Input
                    name="email"
                    type="email"
                    placeholder="Adres Email"
                    value={email}
                    autoFocus
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{errorEmail}</p>
                <p>{user}</p>
                <Input
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>{errorPass}</p>

                {hasAccount ? (
                    <>
                        <Button onClick={(event) => handleLogin(event)}>
                            Zaloguj się
                        </Button>
                        <AlreadyRegisteredParagraph key={1}>
                            Nie masz jeszcze konta?{' '}
                            <span onClick={hasAccountHandler}>
                                Zarejestruj się!
                            </span>
                        </AlreadyRegisteredParagraph>
                    </>
                ) : (
                    <>
                        <Button onClick={(event) => handleRegister(event)}>
                            Zarejestruj
                        </Button>
                        <AlreadyRegisteredParagraph key={2}>
                            Posiadasz już konto?{' '}
                            <span onClick={hasAccountHandler}>
                                Zaloguj się!
                            </span>
                        </AlreadyRegisteredParagraph>
                    </>
                )}
            </Form>
            <OtherLoginServices onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} />
            </OtherLoginServices>
        </Container>
    );
};
export default Login;
