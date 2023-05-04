import React from "react";
import PropTypes from "prop-types";

function GameOver({ pokemonWon, setMode, score, setPokemonWon }) {
  const handleClick = () => {
    setMode("path");
    setPokemonWon([]);
  };
  return (
    <div className="game-over">
      <div className="game-over-container">
        <h2>Game Over</h2>
        <p>You guessed {score} pokemon out of 10 </p>
        <div className="list-pokemon-img">
          {pokemonWon.map((pokemon) => (
            <img src={pokemon.image} alt="" />
          ))}
        </div>
        <button type="button" className="btn" onClick={handleClick}>
          Go back
        </button>
      </div>
    </div>
  );
}
GameOver.propTypes = {
  pokemonWon: PropTypes.shape([]).isRequired,
  setMode: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setPokemonWon: PropTypes.func.isRequired,
};

export default GameOver;
