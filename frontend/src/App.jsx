import React, { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((pokemonData) =>
              setPokemonsArray((prevState) => [...prevState, pokemonData])
            );
        });
      });
  }, []);

  // useEffect(() => {
  //   console.log(pokemonsArray)
  // }, [pokemonsArray])

  return (
    <div className="App">
      {/* <p>{pokemonsArray.map((pokemon) => pokemon)}</p> */}

      <Pokedex pokemonArray={pokemonsArray} />
    </div>
  );
}

export default App;
