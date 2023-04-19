import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";

// console.log(PokedexCard);

function Pokedex({ pokemonArray }) {
  return (
    <>
      {pokemonArray.map((pokemon) => {
        return <PokedexCard pokemon={pokemon} />;
      })}
    </>
  );
}

Pokedex.propTypes = {
  pokemonArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Pokedex;
