import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 80px;
    display: grid;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.graphite};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Navbar = (props) => (
    <Header>
        <h3>Navbar works</h3>
    </Header>
);

// Navbar.propTypes = {};

export default Navbar;
