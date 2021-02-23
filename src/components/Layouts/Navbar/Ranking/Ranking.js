import React from 'react';
import styled from 'styled-components';
import RankingListItem from './RankingListItem/RankingListItem';
import { Players } from 'data/Players';

const Wrapper = styled.ul`
    padding: 0;
    list-style: none;
    list-style-position: outside;
    font-weight: 200;
`;

const Ranking = (props) => {
    console.log(Players);

    return (
        <>
            <Wrapper>
                {Players.map((item, index) => (
                    <RankingListItem
                        key={index + 1}
                        index={index + 1}
                        name={item.name}
                        amount={item.amount}
                    />
                ))}
            </Wrapper>
        </>
    );
};

export default Ranking;
