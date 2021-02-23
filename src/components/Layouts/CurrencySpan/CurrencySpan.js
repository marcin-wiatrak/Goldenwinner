import React from 'react';
import styled from 'styled-components';

const Currency = styled.span`
    font-size: ${({ theme }) => theme.fontSize.s};
`;

const CurrencySpan = (props) => <Currency>zł</Currency>;

export default CurrencySpan;
