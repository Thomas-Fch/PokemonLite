import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/PokemonStats";
import Starter from "./components/Starter";
import PokemonCards from "./components/PokemonCards";
import "./App.css";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);

  console.info(pokemonsArray);
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

      setPokemonsStarter(starter);
      setPokemonsArray(pokemons);
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.info(pokemonsStarter)}
      <Starter pokemonStarter={pokemonsStarter} />
    </div>
  );
}
export default App;
