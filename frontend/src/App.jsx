import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/PokemonStats";
// import Stats from "./components/Stats";
import Navbar from "./components/Navbar";
import GetStarter from "./components/GetStarter";

import "./App.scss";
// import Pokedex from "./components/Pokedex";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsStarter, setPokemonsStarter] = useState([]);
  const [pokemonTeam, setPokemonTeam] = useState([]);

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
      <h2>TEST</h2>
      {console.info(pokemonsArray)}
      {console.info(pokemonsStarter)}
      {/* <button type="button" onClick={() => pokemonsArray[0].gainXp(50)}>
        LEVEL UP
      </button>
      <button
        type="button"
        onClick={() =>
          console.info(
            `I have ${pokemonsArray[0].xp} Xp and need ${pokemonsArray[0].nextLevelXp} Xp to level Up`
          )
        }
      >
        XP INFO
      </button> */}
      {/* {pokemonsArray.map((pokemon) => (
        <Stats key={pokemon.name} pokemon={pokemon} />
      ))} */}
      {console.info(pokemonTeam)}
      <GetStarter pokemon={pokemonsStarter} setPokemonTeam={setPokemonTeam} />
      <Navbar />
    </div>
  );
}

export default App;
