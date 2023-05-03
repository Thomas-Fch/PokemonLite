import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/Pokemon";
import Starter from "./components/Starter";

import "./App.scss";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsStarter, setPokemonsStarter] = useState([]);
  // const [pokemonTeam, setPokemonTeam] = useState([]);
  // const [mode, setMode] = useState("path");
  // const [pokemonWon, setPokemonWon] = useState([]);
  // const [score, setScore] = useState(0);

  console.info(pokemonsArray);
  // const [pokemonTeam, setPokemonTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tabPokemon = [];
      const starter = [];
      const idStarter = [1, 4, 7];

      for (let i = 1; i <= 200; i += 1) {
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
      setPokemonsStarter(starter);
    };
    fetchData();
  }, []);

  // const handleClick = () => {
  //   setMode("guessPokemon");
  // };

  return (
    <div>
      {console.info(pokemonsStarter)}
      <Starter pokemonsArray={pokemonsArray} />
    </div>
  );
}
export default App;
