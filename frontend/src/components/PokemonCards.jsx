/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import PropTypes from "prop-types";
import getColorsByType from "./getColorsByType";
// import fondpokeball from "../assets/icon/fondpokeball.png";
function PokemonCards({ pokemon, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);
  // const [heartIconColor, setHeartIconColor] = useState("white");

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    console.info("click coeur");
    setIsFavorite(!isFavorite);
    // setHeartIconColor(isFavorite ? "white" : "red");
  };

  // const heartIconColor = isFavorite ? "red" : "white";
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <figure
        className="pokemon-card"
        onClick={onClick}
        style={{
          backgroundColor: getColorsByType(pokemon.type[0].type.name),
        }}
      >
        {/* // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/interactive-supports-focus, jsx-a11y/control-has-associated-label */}
        <div
          role="button"
          id="favorite"
          onClick={handleFavoriteClick}
          onKeyDown={null}
          className={isFavorite ? "isFavorite" : "notFavorite"}
        />
        <img
          className="pokeball"
          src="./src/assets/icon/fondpokeball.png"
          alt="pokeball"
        />
        <div>
          {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          {/* <img
            className="heart"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg"
            alt="pokeball"
            onClick={handleFavoriteClick}
            style={{ backgroundColor: heartIconColor }}
          /> */}
        </div>
        <div className="pokemon-card-top">
          <h2>{pokemon.name}</h2>
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
