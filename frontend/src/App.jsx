import React, { useEffect, useState } from "react";

import "./App.css";

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
              setPokemonsArray((prev) => [...prev, pokemonData])
            );
        });
      });
  }, []);

  useEffect(() => {
    console.info(pokemonsArray);
  }, [pokemonsArray]);

  return (
    <div className="App">
      <h1>fg</h1>
      {/* {pokemonsArray[0].weight} */}
      {pokemonsArray.map((pokemon) => pokemon.name)}
    </div>
  );
}

export default App;
