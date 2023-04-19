import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import colors from "./colors";
import iconType from "./iconType";

function PokedexCard({ pokemon }) {
  const [typeImage, setTypeImage] = useState("");
  const loadImage = () => {
    import(iconType[pokemon.type[0].type.name]).then((image) => {
      setTypeImage(image.default);
    });
  };

  useEffect(() => {
    loadImage();
  }, []);
  // render() {
  //   const { image } = this.state;
  //   return (
  //     <Fragment>
  //       {image && <img src={image} alt="" />}
  //     </Fragment>
  //   );
  // }

  return (
    <div id="pokedexCard">
      <figure
        className="cardPokedex"
        style={{ backgroundColor: colors[pokemon.type[0].type.name] }}
      >
        <img
          className="imgPokedex"
          style={{ width: "100px" }}
          src={pokemon.image}
          alt="pokemon"
        />
      </figure>
      <ul className="ulPokedex">
        <li className="liPokedex">{pokemon.name}</li>
        <li className="liPokedex">{pokemon.type[0].type.name}</li>
        <li
          className="liPokedex"
          style={{ backgroundColor: colors[pokemon.type[0].type.name] }}
        >
          <div> {pokemon.id?.toString().padStart(3, "0")}</div>
          <img className="liPokedex" src={typeImage} alt="" />
        </li>
      </ul>
    </div>

    // <div id="pokedexCard">
    //   <figure
    //     className="cardPokedex"
    //     // style={{ backgroundColor: colors[pokemon.getTypes()] }}
    //   >
    //     <img
    //       className="imgPokedex"
    //       style={{ width: "100px" }}
    //       src={pokemon.image}
    //       alt="pokemon"
    //     />
    //   </figure>

    //   <ul className="ulPokedex">
    //     <li className="liPokedex">{pokemon.name}</li>
    //     <li className="liPokedex">
    //       #{pokemon.id?.toString().padStart(3, "0")}
    //     </li>
    //     <li
    //       className="liPokedex"
    //       // style={{ backgroundColor: colors[pokemon.getFirstType()] }}
    //     >
    //       {pokemon.types[0].type.name}
    //       {iconType[pokemon.getTypes()]}
    //       {/* <img src={iconType[pokemon.getFirstType()]} alt="" /> */}
    //     </li>
    //   </ul>
    // </div>
  );
}

PokedexCard.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokedexCard;
