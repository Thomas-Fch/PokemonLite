import { useState } from "react";
import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";
import NumberFilter from "./NumberFilter";

function Pokedex({ pokemonsArray }) {
  const [filterBar, setFilterBar] = useState("");

  const handelClickFilter = (e) => {
    setFilterBar(e.target.value);
  };

  return (
    <div id="pokedex">
      <div className="searchPokedex">
        <input
          className="searchBarPok"
          type="text"
          onChange={handelClickFilter}
          placeholder="Pokemon"
        />
        <img className="serachIcon" src="./src/assets/icon/loupe.png" alt="" />
        <NumberFilter />
      </div>

      <div className="vertical-line">
        <span className="dot" />
        <img className="livre" src="./src/assets/icon/livre.png" alt="" />
      </div>
      <div>
        {pokemonsArray
          .filter((pokemon) => pokemon.name.startsWith(filterBar))
          .map((pokemon) => {
            return <PokedexCard key={pokemon.name} pokemon={pokemon} />;
          })}
      </div>
    </div>
  );
}

Pokedex.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Pokedex;
