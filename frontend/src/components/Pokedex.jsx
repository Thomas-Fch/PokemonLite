import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokedexCard from "./PokedexCard";
import CloseBtn from "./CloseBtn";

function Pokedex({ pokemonsArray, setMode }) {
  const [searchString, setSearchString] = useState("");
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonsArray);
  const [filterType, setFilterType] = useState("name");

  const sortFonctionString = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const sortFonctionString2 = (a, b) => {
    if (a.getFirstType() < b.getFirstType()) {
      return -1;
    }
    if (a.getFirstType() > b.getFirstType()) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    if (filterType === "name") {
      console.info(filterType);
      setFilteredPokemonList(
        pokemonsArray
          .sort(sortFonctionString)
          .filter((pokemon) => pokemon[filterType].includes(searchString))
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }
    if (filterType === "id") {
      setFilteredPokemonList(
        pokemonsArray
          .sort((a, b) => a.id - b.id)
          .filter((pokemon) => pokemon[filterType] === searchString)
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }

    if (filterType === "type") {
      setFilteredPokemonList(
        pokemonsArray
          .sort(sortFonctionString2)
          .filter((pokemon) => pokemon.getFirstType().includes(searchString))
          .map((element) => (
            <PokedexCard key={element.name} pokemon={element} />
          ))
      );
    }

    console.info(filteredPokemonList);
  }, [filterType, searchString]);

  const handelClickFilter = (e) => {
    setSearchString(e.target.value);
  };

  const handleClick = (property) => {
    setFilterType(property);
  };

  return (
    <div id="pokedex">
      <div className="searchPokedex">
        <CloseBtn setMode={setMode} />
        <input
          className="searchBarPok"
          type="text"
          onChange={handelClickFilter}
          placeholder="Pokemon"
        />
        <img
          className="searchIcon"
          src="./src/assets/icon/loupe.png"
          alt="loupe"
        />
        <ul className="filtrePokedex">
          <span
            role="button"
            tabIndex={0}
            onClick={() => handleClick("id")}
            onKeyDown={null}
          >
            NUMBER
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => handleClick("name")}
            onKeyDown={null}
          >
            LETTER
          </span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => handleClick("type")}
            onKeyUp={null}
          >
            TYPE
          </span>
        </ul>
      </div>

      <div>
        <img className="livre" src="./src/assets/icon/livre.png" alt="livre" />
      </div>
      <div>
        {pokemonsArray
          .filter((pokemon) => pokemon.name.includes(searchString))
          .map((pokemon) => {
            return <PokedexCard key={pokemon.name} pokemon={pokemon} />;
          })}
        {filteredPokemonList?.map((element) => element)}
      </div>
    </div>
  );
}

Pokedex.propTypes = {
  pokemonsArray: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setMode: PropTypes.func.isRequired,
};

export default Pokedex;
