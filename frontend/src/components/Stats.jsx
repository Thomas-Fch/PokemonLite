/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import PropTypes from "prop-types";
import getColorsByType from "./getColorsByType";

function Stats({ pokemon }) {
  const [goBack, setGoBack] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  function handleClick() {
    setGoBack(true);
  }
  if (goBack) {
    window.location.href = "/selectedPokemon";
  }

  return (
    <figure>
      <div
        className="pokemonStat"
        style={{
          backgroundColor: getColorsByType(pokemon.type[0].type.name),
        }}
      >
        {/* <div className="like" /> */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          id="favorite"
          onClick={handleFavoriteClick}
          className={isFavorite ? "isFavorite" : "notFavorite"}
        />

        <div className="pokeTop">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div className="arrowUp" onClick={handleClick} />
          <h1>{pokemon.name}</h1>
          <h2 className="pokeTitle">
            {" "}
            #{pokemon.id.toString().padStart(3, "0")}
          </h2>
        </div>
        <img className="p-strenght" src={pokemon.image} alt={pokemon.name} />

        <img
          className="poke"
          src="./src/assets/icon/fondpokeball.png"
          alt="poke"
        />

        <div className="pokemonStat-bottom">
          <h2
            className="type"
            style={{
              backgroundColor: getColorsByType(pokemon.type[0].type.name),
            }}
          >
            {pokemon.type[0].type.name}
          </h2>
          <div className="jg">
            <p>
              <span>{pokemon.stats[0].stat.name}</span>{" "}
              <span className="span-1">{pokemon.stats[0].base_stat}</span>
            </p>

            <p className="jauge-1" />
          </div>

          <div className="jg-1">
            <p>
              <span>{pokemon.stats[1].stat.name}</span>
              <span className="span-2"> {pokemon.stats[1].base_stat}</span>
            </p>
            <p className="jauge-2" />
          </div>
          <div className="jg-2">
            <p>
              <span> {pokemon.stats[2].stat.name} </span>
              <span className="span-3">{pokemon.stats[2].base_stat}</span>
            </p>
            <p className="jauge-3" />
          </div>
          <div className="jg-3">
            <p>
              <span>{pokemon.stats[5].stat.name} </span>
              <span className="span-4">{pokemon.stats[5].base_stat}</span>
            </p>
            <p className="jauge-4" />
          </div>
        </div>
      </div>
    </figure>
  );
}

Stats.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        stat: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
        base_stat: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Stats;
