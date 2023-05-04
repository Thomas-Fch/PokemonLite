/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";
import getColorsByType from "./getColorsByType";

function PokemonCards({ pokemon, onClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <figure
        className="pokemon-card"
        onClick={onClick}
        style={{
          backgroundColor: getColorsByType(pokemon.type[0].type.name),
        }}
      >
        <img
          className="pokeball"
          src="./src/assets/icon/fondpokeball.png"
          alt="pokeball"
        />
        <div className="pokemon-card-top">
          <h2 className="PokeCardName">{pokemon.name}</h2>
          <img
            className="pokemon-card-image"
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <div className="pokemon-card-bottom">
          {pokemon.type?.map((type) => (
            <div
              className="pokemon-card-badge"
              key={type.slot}
              style={{
                backgroundColor: getColorsByType(type.type.name),
              }}
            >
              {type.type.name}
            </div>
          ))}
        </div>
      </figure>
    </div>
  );
}

PokemonCards.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.arrayOf(
      PropTypes.shape({
        slot: PropTypes.number.isRequired,
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PokemonCards;
