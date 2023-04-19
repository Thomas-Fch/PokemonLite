import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";

// console.log(PokedexCard);

function Pokedex({ pokemonsArray }) {
  return (
    <>
      {pokemonsArray.map((pokemon) => {
        return <PokedexCard pokemon={pokemon} />;
      })}
    </>
  );
}

Pokedex.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Pokedex;
