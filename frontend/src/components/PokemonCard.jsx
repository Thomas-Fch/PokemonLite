import React from "react";
import PropTypes from "prop-types";
import getColorsByType from "./getColorsByType";

function PokemonCard({ pokemon }) {
  console.info(getColorsByType("grass"));
  return (
    <figure
      className="pokemon"
      style={{
        backgroundColor: getColorsByType(pokemon.type[0].type.name),
      }}
    >
      <h1 className="nom">{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <figcaption>{pokemon.type[0].type.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokemonCard;
