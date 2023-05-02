import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CloseBtn from "./CloseBtn";
import InputGuess from "./InputGuess";

function PokemonGuesser({ setMode, pokemonsArray }) {
  const [turn, setTurn] = useState(0);
  const [isGuessed, setIsGuessed] = useState();
  const [pokemonToGuess, setPokemonToGuess] = useState({});
  const [round, setRound] = useState(1);

  const getRandomIndex = (maxIndex) => {
    return 1 + Math.floor(Math.random() * maxIndex);
  };

  const handleClickNext = () => {
    setRound((prev) => prev + 1);
    setIsGuessed();
  };

  useEffect(() => {
    const index = getRandomIndex(pokemonsArray.length);
    setPokemonToGuess(pokemonsArray[index]);
    if (round > 10) {
      setMode("path");
    }
  }, [round]);

  return (
    <div className="guesser-container">
      <CloseBtn setMode={setMode} />
      <div className="round">{round} / 10</div>
      <h1>Who is that pokemon ?</h1>
      {pokemonToGuess && (
        <div className="guesser-inner-container">
          {/* <p> {pokemonToGuess.name} </p> */}
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

          {/* {isGuessed && (
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
          )} */}

          {isGuessed && (
            <div className="goodGuessContainer">
              <h3>Amazing!!</h3>
              <button
                type="button"
                className="btn cta-next"
                onClick={handleClickNext}
              >
                Next
              </button>
            </div>
          )}

          {isGuessed === false && (
            <div className="wrongGuessContainer">
              <h3>Try Again : Turn n°{turn} </h3>
              <button
                type="button"
                className="btn cta-skip"
                onClick={handleClickNext}
              >
                Skip
              </button>
            </div>
          )}

          {isGuessed === undefined && (
            <button
              type="button"
              className="btn cta-skip"
              onClick={handleClickNext}
            >
              Skip
            </button>
          )}
        </div>
      )}
    </div>
  );
}

PokemonGuesser.propTypes = {
  // pokemonToGuess: PropTypes.shape({
  //   image: PropTypes.string,
  //   name: PropTypes.string,
  // }).isRequired,
  pokemonsArray: PropTypes.shape([]).isRequired,
  setMode: PropTypes.func.isRequired,
};

export default PokemonGuesser;
