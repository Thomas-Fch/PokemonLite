import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Pokemon from "./Classes/Pokemon";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";

import "./App.scss";
// import "./App.css";
import Starter from "@components/Starter";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsStarter, setPokemonsStarter] = useState([]);
  const [pokemonWon, setPokemonWon] = useState([]);
  const [score, setScore] = useState(0);

  console.info(pokemonsArray);
  // const [pokemonTeam, setPokemonTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tabPokemon = [];
      const starter = [];
      const idStarter = [1, 4, 7];

      for (let i = 1; i <= 151; i += 1) {
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

  return (
    <div className="App">
      {console.info(pokemonsArray)}
      {console.info(pokemonsStarter)}
      {/* <Login /> */}
      {/* <Navbar /> */}
      <Starter pokemonsArray={pokemonsArray} />
    </div>
  );
}
export default App;
