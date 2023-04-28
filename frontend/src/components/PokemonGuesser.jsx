import React, { useState } from "react";
import PropTypes from "prop-types";
import CloseBtn from "./CloseBtn";
import InputGuess from "./InputGuess";
import Navbar from "./Navbar";

function PokemonGuesser({ pokemonToGuess, setMode }) {
  const [turn, setTurn] = useState(0);
  const [isGuessed, setIsGuessed] = useState();

  return (
    <div className="guesser-container">
      <CloseBtn setMode={setMode} />
      <h1>Who is that pokemon ?</h1>
      {pokemonToGuess && (
        <div className="guesser-inner-container">
          <InputGuess
            setTurn={setTurn}
            setIsGuessed={setIsGuessed}
            pokemonToGuess={pokemonToGuess}
          />
          <img
            draggable="false"
            src={pokemonToGuess.image}
            alt=""
            className={isGuessed ? "poke-shadow" : "poke-color"}
          />

          {isGuessed && (
            <div className="goodGuessContainer">
              <h3>That's a good guess!!</h3>
              <button
                type="button"
                className="btn cta-path"
                onClick={() => setMode("path")}
              >
                Go back
              </button>
            </div>
          )}

          {isGuessed === false && (
            <div className="wrongGuessContainer">
              <h3>Try Again : Turn n°{turn} </h3>
            </div>
          )}

          {isGuessed === undefined && null}
        </div>
      )}
      <Navbar />
    </div>
  );
}

PokemonGuesser.propTypes = {
  pokemonToGuess: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  setMode: PropTypes.func.isRequired,
};

export default PokemonGuesser;
