import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Dice1 } from 'assets/images/dices/dice-one.svg';
import { ReactComponent as Dice2 } from 'assets/images/dices/dice-two.svg';
import { ReactComponent as Dice3 } from 'assets/images/dices/dice-three.svg';
import { ReactComponent as Dice4 } from 'assets/images/dices/dice-four.svg';
import { ReactComponent as Dice5 } from 'assets/images/dices/dice-five.svg';
import { ReactComponent as Dice6 } from 'assets/images/dices/dice-six.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const LuckyDice = (props) => {
    const [rollingTime, setRollingTime] = useState(2);
    const [diceNumber, setDiceNumber] = useState('');
    const [lockRolling, setLockRolling] = useState(false);

    const diceNumbersArr = [1, 2, 3, 4, 5, 6];
    const frameDuration = 1000 / 20;
    const totalFrames = Math.round((rollingTime * 1000) / frameDuration);

    const letsRock = () => {
        setLockRolling(true);
        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            let randDiceNumber = Math.floor(
                Math.random() * diceNumbersArr.length
            );
            setDiceNumber(diceNumbersArr[randDiceNumber]);
            displayDice();
            if (frame === totalFrames) {
                clearInterval(counter);
                setLockRolling(false);
            }
        }, frameDuration);
    };

    const displayDice = (diceNumber) => {
        switch (diceNumber) {
            case 1:
                return <Dice1 />;
            case 2:
                return <Dice2 />;
            case 3:
                return <Dice3 />;
            case 4:
                return <Dice4 />;
            case 5:
                return <Dice5 />;
            case 6:
                return <Dice6 />;
            default:
                return <dice5 />;
        }
    };

    return (
        <Wrapper>
            <div>
                <label>Czas mieszania kości</label>
                <input
                    type="number"
                    placeholder="2.0"
                    name="rollingTimeInput"
                    defaultValue={rollingTime}
                    min="1.5"
                    max="10"
                    step="0.1"
                    onChange={(e) => setRollingTime(e.target.value)}
                />
                <button onClick={letsRock} disabled={lockRolling}>
                    {lockRolling ? 'Trwa losowanie' : 'Rzuć kośćmi'}
                </button>
            </div>
            <div>
                <p>Wynik:</p>
                <span>{displayDice(diceNumber)}</span>
            </div>
        </Wrapper>
    );
};

export default LuckyDice;
