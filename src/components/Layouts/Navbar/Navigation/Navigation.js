import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    overflow: hidden;
    /* border: 1px solid blue; */

    li {
        margin: 0 20px;
        /* border: 1px solid green; */
        a {
            position: relative;
            display: block;
            line-height: 80px;
            min-height: 80px;
            padding: 0 10px;
            text-decoration: none;
            color: ${({ theme }) => theme.colors.textPrimary};
            text-transform: uppercase;
            transition: 0.5s ease;

            &:hover {
                color: ${({ theme }) => theme.colors.accent};
            }
        }
    }

    .active {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 0 5px 3px ${({ theme }) => theme.colors.black};
        overflow: hidden;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            background-color: ${({ theme }) => theme.colors.accent};
            animation: activeListElement 0.5s ease-in-out forwards;
        }
    }
    @keyframes activeListElement {
        0% {
            width: 0%;
            left: 0;
        }
        50% {
            width: 100%;
            left: 100%;
        }
        100% {
            width: 100%;
            left: 0;
        }
    }
`;

const Navigation = (props) => (
    <ListWrapper>
        <li>
            <NavLink exact activeClassName="active" to="/luckycase">
                Lucky case
            </NavLink>
        </li>
        <li>
            <NavLink exact activeClassName="active" to="/boxwar">
                Boxwar
            </NavLink>
        </li>
        <li>
            <NavLink exact activeClassName="active" to="/dices">
                Roll the dice
            </NavLink>
        </li>
    </ListWrapper>
);

export default Navigation;
