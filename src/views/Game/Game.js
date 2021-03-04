import React from 'react';
import styled from 'styled-components';
import GameHeader from './GameHeader/GameHeader';

const Wrapper = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.blue1};
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
        -15deg,
        #001845 0%,
        #001233 50%,
        #023e7d 50%,
        #023e7d 100%
    );
`;

const Game = ({ handleLogout, gameComponent, children }) => {
    return (
        <Wrapper>
            <GameHeader />
            {children}
        </Wrapper>
    );
};

export default Game;
