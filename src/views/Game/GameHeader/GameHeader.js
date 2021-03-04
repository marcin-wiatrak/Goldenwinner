import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/images/logo_export.svg';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
    padding: 0 100px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Nav = styled.nav`
    position: relative;
    height: 80px;
    margin-left: 50px;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
`;

const Li = styled.li`
    position: relative;
    list-style: none;
    &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.colors.gray1};
    }

    a {
        display: block;
        position: relative;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        text-transform: uppercase;
        padding: 0 25px;
        line-height: 80px;
        height: 80px;
        transition: 0.4s ease;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue2};
            &::before {
                content: '';
                width: 0;
                height: 2px;
                background-color: ${({ theme }) => theme.colors.white};
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                animation: bottomLine 0.3s ease-in-out forwards;
            }
        }
    }
    .active {
        background-color: #023e7d;
        box-shadow: 0 25px 15px -5px ${({ theme }) => theme.colors.blue3};

        &::after {
            content: '';
            position: absolute;
            height: 10px;
            width: 20px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-left: transparent 10px solid;
            border-right: transparent 10px solid;
            border-top: 10px solid ${({ theme }) => theme.colors.white};
            overflow: hidden;
            animation: activeSlideIn 0.3s linear forwards;
        }
    }
    @keyframes activeSlideIn {
        0% {
            top: -10px;
        }
        100% {
            top: 0;
        }
    }
    @keyframes bottomLine {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    } ;
`;

const MainLogo = styled(Logo)`
    height: 65px;
`;

const GameHeader = (props) => (
    <Header>
        <div>
            <MainLogo />
            <Nav>
                <Ul>
                    <Li>
                        <NavLink
                            activeClassName="active"
                            to="/luckychests"
                            exact
                        >
                            Lucky chest
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink activeClassName="active" to="/boxwars" exact>
                            Boxwars
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink activeClassName="active" to="/luckydice" exact>
                            Roll a dice
                        </NavLink>
                    </Li>
                </Ul>
            </Nav>
        </div>
        <div>
            <span>Posiadasz xxx forsy</span>
        </div>
    </Header>
);

export default GameHeader;
