import CurrencySpan from 'components/CurrencySpan/CurrencySpan';
import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    display: grid;
    grid-template-columns: 20px 7fr 1fr;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderBox};
    }

    p:first-child {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    p:last-child {
        text-align: right;
    }
`;

const RankingListItem = (props) => (
    <Li>
        <p>{props.index}.</p>
        <p>{props.name}</p>
        <p>
            {props.amount.toFixed(2)}
            <CurrencySpan />
        </p>
    </Li>
);

export default RankingListItem;
