import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/PokemonStats";
import Navbar from "./components/Navbar";
import GetStarter from "./components/GetStarter";

import "./App.scss";

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

  useEffect(() => {
    console.info(pokemonsArray);
  }, [pokemonsArray]);

  return (
    <div className="App">
      <h2>TEST</h2>
      {console.info(pokemonsArray)}
      {console.info(pokemonsStarter)}
      {console.info(pokemonTeam)}
      <GetStarter pokemon={pokemonsStarter} setPokemonTeam={setPokemonTeam} />
      <Navbar />
    </div>
  );
}

export default App;
