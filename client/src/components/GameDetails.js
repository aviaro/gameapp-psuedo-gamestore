import React from 'react';
import {useLocation} from 'react-router-dom';


const GameDetails = ({ game }) => {

  const location = useLocation();

  const {product} = location.state;


  return (
    <div>
      <p>{product.gameName}</p>
      <p>{product.gamePrice}</p>
      {/* <h3>{game.gameName}</h3>
      <p>Price: {game.gamePrice}</p>
      <p>Description: {game.gameDescription}</p>
      <img src={game.gameImage} alt={game.gameName} style={{ width: '100%', height: 'auto' }} /> */}
    </div>
  );
};

export default GameDetails;
