import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";

function Pokedex({ pokemonsArray }) {
  return (
    <div id="pokedex">
      <div>
        <input className="searchBarPok" type="Search Bar" />
        <ul className="filtrePokedex">
          <li>NUMBER</li>
          <li>LETTER</li>
          <li>TYPE</li>
        </ul>
      </div>
      <div className="vertical-line">
        <span className="dot" />
      </div>
      <img src="" alt="" />
      <div className="cardPokedex">
        {pokemonsArray.map((pokemon) => {
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
