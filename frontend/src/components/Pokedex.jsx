import { useState } from "react";
import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";
// import SearchBar from "./SearchBar";
import SearchFilter from "./SearchFilter";

function Pokedex({ pokemonsArray }) {
  const [filter, setFilter] = useState("");

  // Quand filter change, on console.log : "Filter changed"
  // pokemonsArray.filter((name) => console.warn("name", name.name));

  // useEffect(() => {
  //   if (filter !== "") {
  //     PokedexCard.filter((name) => name.name.includes(filter)).map(
  //       (filteredName) => {
  //         <div>{filteredName.name}</div>;
  //       }
  //     );
  //   }
  // }, [filter]);

  // useEffect(() => {
  //   if (filter !== "") {
  //     pokemonsArray
  //       .filter((name) => name.name.includes(filter))
  //       .map((pokemon) => {
  //         return <PokedexCard key={pokemon.name} pokemon={pokemon} />;
  //       });
  //   }
  // }, [filter]);

  // useEffect(() => {
  //   if (filter !== "") {
  //     pokemonsArray
  //       .filter((name) => name.name.includes(filter))
  //       .map((filteredName) => {
  //         console.warn("pokemon search --->", filteredName.name);
  //       });
  //   }
  // }, [filter]);

  <div id="pokedex">
    <div className="searchPokedex">
      <input
        className="searchBarPok"
        type="text"
        onKeyDown={(e) => {
          setFilter(e.target.value);
          console.warn(e.target.value);
        }}
        // onKeyDown={(e) => setText(e.target.value)}
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

      {/* {pokemonsArray.map((pokemon) =>  
            pokemon.name.include(filter) && PokedexCard (pokemon)
            )
          );
        })} */}

      {/* {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId) */}
    </div>
  </div>;
}

Pokedex.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Pokedex;
