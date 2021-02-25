import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faKey,
    faDice,
    faTicketAlt,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from 'assets/images/logo_export.svg';
import { theme } from 'assets/styles/theme';
import Navigation from './Navigation/Navigation';
import CurrencySpan from 'components/CurrencySpan/CurrencySpan';

const Header = styled.header`
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.graphite};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const FreeMoneyCounter = styled.span`
    background-color: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.graphite};
    padding: 0 20px;
    margin-left: 3px;
    border-radius: 20px;
`;

const LeftContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 100px;

    svg {
        margin-right: 50px;
    }
`;

const RightContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 100px;

    > div {
        /* padding: 0 50px; */
        margin-left: 80px;
    }
`;

const Keys = styled.p`
    svg {
        color: #326fe5;
    }
`;

const Dices = styled.p`
    svg {
        color: #fff2ab;
    }
`;

const Tickets = styled.p`
    svg {
        color: #ff69f0;
    }
`;

const PlayerEquipment = styled.div`
    p {
        display: grid;
        grid-template-columns: 50px auto;
        grid-gap: 10px;
        align-items: center;
        padding: 2px;
        svg {
            margin: 0 auto;
        }
    }
`;

const PlayerMoney = styled.div`
    p {
        line-height: 25px;
        svg {
            font-size: 25px;
            margin-right: 10px;
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

const Navbar = (props) => (
    <Header>
        <LeftContainer>
            <Logo />
            <Navigation />
        </LeftContainer>
        <RightContainer>
            <div>
                Darmowa kasa za: <FreeMoneyCounter>8:35</FreeMoneyCounter>
            </div>
            <PlayerEquipment>
                <Keys>
                    <FontAwesomeIcon icon={faKey} /> <span>25</span>
                </Keys>
                <Dices>
                    <FontAwesomeIcon icon={faDice} /> <span>10</span>
                </Dices>
                <Tickets>
                    <FontAwesomeIcon icon={faTicketAlt} /> <span>1</span>
                </Tickets>
            </PlayerEquipment>
            <PlayerMoney>
                <p>
                    <FontAwesomeIcon icon={faWallet} />
                    <span>
                        555010,00
                        <CurrencySpan />
                    </span>
                </p>
            </PlayerMoney>
        </RightContainer>
    </Header>
);

// Navbar.propTypes = {};

export default Navbar;
