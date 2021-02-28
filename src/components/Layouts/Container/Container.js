import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.header`
    width: 100%;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
`;

const HorizontalLine = styled.span`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
    padding: 15px;
`;

const Wrapper = styled.div`
    width: ${(props) => (props.width ? props.width : '350px')};
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Container = (props) => {
    return (
        <Wrapper width={props.width}>
            <Heading>
                {props.title}
                <HorizontalLine />
            </Heading>
            <Content>{props.children}</Content>
        </Wrapper>
    );
};

Container.propTypes = {};

export default Container;
