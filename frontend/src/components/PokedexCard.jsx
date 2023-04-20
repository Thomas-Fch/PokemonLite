import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import colors from "./colors";
import iconType from "./iconType";

function PokedexCard({ pokemon }) {
  const [typeImage, setTypeImage] = useState("");
  const loadImage = () => {
    import(iconType[pokemon.getFirstType()]).then((image) => {
      setTypeImage(image.default);
    });
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div id="pokedexCard">
      <figure
        className="cardPokedex"
        style={{ backgroundColor: colors[pokemon.getFirstType()] }}
      >
        <img
          className="imgPokedex"
          style={{ width: "100px" }}
          src={pokemon.image}
          alt="pokemon"
        />
      </figure>
      <ul className="ulPokedex">
        <li className="liPokedex">
          #{pokemon.id?.toString().padStart(3, "0")}
        </li>
        <div id="name_type">
          <li className="liPokedex">{pokemon.name}</li>
          <li
            className="liPokedexType"
            style={{ backgroundColor: colors[pokemon.getFirstType()] }}
          >
            <div>{pokemon.getFirstType()}</div>
            <img className="liPokedexTypeImage" src={typeImage} alt="" />
          </li>
        </div>
      </ul>
    </div>
  );
}

PokedexCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokedexCard;
