import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";

function Pokedex({ pokemonsArray }) {
  return (
    <div id="pokedex">
      <input className="SearchBarPok" type="Search Bar" />
      {/* <div className="SearchBarPok">Search Bar</div> */}
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
