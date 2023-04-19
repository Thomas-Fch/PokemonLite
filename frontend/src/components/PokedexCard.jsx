import PropTypes from "prop-types";
import colors from "./Colors";
import iconType from "./iconType";

function PokedexCard({ pokemon }) {
  return (
    <div id="pokedexCard">
      <figure
        className="cardPokedex"
        style={{ backgroundColor: colors[pokemon.types[0].type.name] }}
      >
        <img
          className="imgPokedex"
          style={{ width: "100px" }}
          // src={pokemon.sprites?.other["official-artwork"].front_default}
          alt="pokemon"
        />
      </figure>

      <ul className="ulPokedex">
        <li className="liPokedex">{pokemon.name}</li>
        <li className="liPokedex">
          #{pokemon.id?.toString().padStart(3, "0")}
        </li>
        <li
          className="liPokedex"
          style={{ backgroundColor: colors[pokemon.types[0].type.name] }}
        >
          {pokemon.types[0].type.name}
          {iconType[pokemon.types[0].type.name]}
          <img src={iconType[pokemon.types[0].type.name]} alt="" />
        </li>
      </ul>
    </div>
  );
}

PokedexCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokedexCard;
