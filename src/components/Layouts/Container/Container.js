import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 350px;
    border: 1px solid ${({ theme }) => theme.colors.borderBox};
    background-color: ${({ theme }) => theme.colors.graphite};
    box-shadow: 0px 0px 40px 10px rgba(204, 204, 204, 0.05);
`;

const Heading = styled.header`
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.headerGradient};
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
`;

const HorizontalLine = styled.span`
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, #2f2f2f 0%, #7a7a7a 50%, #2f2f2f 100%);
`;

const Content = styled.div`
    padding: 15px;
`;

const Container = (props) => (
    <Wrapper>
        <Heading>
            {props.title}
            <HorizontalLine />
        </Heading>
        <Content>{props.children}</Content>
    </Wrapper>
);

Container.propTypes = {};

export default Container;
