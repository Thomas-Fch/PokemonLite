import { useState } from "react";
import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";
import SearchFilter from "./SearchFilter";

function Pokedex({ pokemonsArray }) {
  const [filter, setFilter] = useState("");

  return (
    <div id="pokedex">
      <div className="searchPokedex">
        <input
          className="searchBarPok"
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Pokemon"
        />
        <img className="serachIcon" src="./src/assets/icon/loupe.png" alt="" />
        <SearchFilter />
      </div>
      <div className="vertical-line">
        <span className="dot" />
        <img className="livre" src="./src/assets/icon/livre.png" alt="" />
      </div>
      <div className="cardPokedex">
        {pokemonsArray
          .filter((name) => name.name.startsWith(filter))
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
