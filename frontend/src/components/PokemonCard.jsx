import React from "react";
import PropTypes from "prop-types";

function Card({ pokemon }) {
  return (
    <figure>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      {/* <figcaption>{pokemon.type[0].type.name}</figcaption> */}
    </figure>
  );
}

Card.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Card;
