import React from 'react';

const Game = ({ handleLogout }) => (
    <div>
        <h3>Game works</h3>
        <button onClick={handleLogout}>Logout</button>
    </div>
);

export default Game;
