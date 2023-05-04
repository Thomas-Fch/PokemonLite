import React, { useState } from "react";
import PropTypes from "prop-types";
import PokemonCards from "./PokemonCards";
import Stats from "./Stats";

function Starter({ pokemonsArray }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showPokemonStat, setShowPokemonStat] = useState(false);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPokemonStat(true);
  };

  return (
    <div className="starterFile">
      {!showPokemonStat && (
        <div>
          <h1 className="title">MY FAVORITE</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
            }}
          >
            {pokemonsArray.map((pokemon) => (
              <div key={pokemon.name} style={{ margin: "10px" }}>
                <PokemonCards
                  pokemon={pokemon}
                  onClick={() => handlePokemonSelect(pokemon)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {showPokemonStat && <Stats pokemon={selectedPokemon} />}
    </div>
  );
}

Starter.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Starter;
