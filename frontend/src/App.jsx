import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/PokemonStats";
import Stats from "./components/Stats";
// import Card from "./components/PokemonCard";
// import LaunchFight from "./components/LaunchFight";

import "./App.css";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsStarter, setPokemonsStarter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tabPokemon = [];
      const starter = [];
      const idStarter = [1, 4, 7];

      for (let i = 1; i <= 31; i += 1) {
        tabPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }
      const responses = await Promise.all(tabPokemon.map((url) => fetch(url)));
      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      const pokemons = data.map((pokemon) => new Pokemon(pokemon));

      pokemons.forEach((pokemon) => {
        if (idStarter.includes(pokemon.id)) {
          starter.push(pokemon);
        }
      });

      setPokemonsArray(pokemons);
      setPokemonsStarter(starter);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Pourquoi ce TEST ?</h2>
      {console.info(pokemonsArray)}
      {console.info(pokemonsStarter)}
      {pokemonsArray.map((pokemon) => (
        <Stats key={pokemon.name} pokemon={pokemon} />
      ))}
      {/* <LaunchFight pokemon={pokemonsArray} /> */}
    </div>
  );
}
export default App;
