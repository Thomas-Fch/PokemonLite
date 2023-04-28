import PropTypes from "prop-types";
import colors from "./colors";
import TagType from "./TagType";

function PokedexCard({ pokemon }) {
  return (
    <div id="pokedexCard">
      <div className="cardPokedex">
        <img
          className="imgPokedex"
          style={{ backgroundColor: colors[pokemon.getFirstType()] }}
          src={pokemon.image}
          alt="pokemon"
        />
      </div>
      <ul className="ulPokedex">
        <li className="liPokedex">
          #{pokemon.id?.toString().padStart(3, "0")}
        </li>
        <div id="name_type">
          <li className="liPokedex">{pokemon.name}</li>
          <TagType type={pokemon.getFirstType()} />
        </div>
      </ul>
    </div>
  );
}

PokedexCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokedexCard;
