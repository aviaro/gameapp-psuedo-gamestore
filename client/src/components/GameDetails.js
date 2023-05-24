import React from 'react';

const GameDetails = ({ game }) => {
  return (
    <div>
      <h3>{game.gameName}</h3>
      <p>Price: {game.gamePrice}</p>
      <p>Description: {game.gameDescription}</p>
      <img src={game.gameImage} alt={game.gameName} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default GameDetails;
