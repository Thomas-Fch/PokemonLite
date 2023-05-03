import React from "react";
import PropTypes from "prop-types";

function GameOver({ pokemonWon, setMode, score }) {
  return (
    <div>
      <h1>Well done</h1>
      <p>You guessed {score} pokemon out of 10 </p>
      <h2>the list</h2>
      {pokemonWon.map((pokemon) => (
        <img src={pokemon.image} alt="" />
      ))}
      <button type="button" onClick={() => setMode("path")}>
        Go back
      </button>
    </div>
  );
}
GameOver.propTypes = {
  pokemonWon: PropTypes.shape([]).isRequired,
  setMode: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default GameOver;
