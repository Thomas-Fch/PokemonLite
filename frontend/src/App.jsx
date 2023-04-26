import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/Pokemon";
import Arena from "./Classes/Arena";
import Path from "./components/Path";
import Battle from "./components/Battle";
import GameOver from "./components/GameOver";

import "./App.css";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [pokemonsStarter, setPokemonsStarter] = useState([]);
  const [arena, setArena] = useState({});
  const [mode, setMode] = useState("start");

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

  const handleClick = () => {
    setMode("battle");
  };
  // const arena = new Arena(pokemonsArray[0], pokemonsArray[18]);

  useEffect(() => {
    setArena(new Arena(pokemonsArray[0], pokemonsArray[24]));
  }, [pokemonsArray]);

  useEffect(() => {
    console.info("FROM APP", arena);
  }, [arena]);

  const handleArenaChange = (newArena) => {
    setArena(newArena);
  };

  return (
    <div className="App">
      {console.info(pokemonsArray)}
      {console.info(pokemonsStarter)}

      {mode === "start" && <Path handleClick={handleClick} />}
      {mode === "battle" && (
        <Battle
          handleArenaChange={handleArenaChange}
          arena={arena}
          mode={mode}
          setMode={setMode}
        />
      )}
      {mode === "gameOver" && <GameOver setMode={setMode} />}
    </div>
  );
}

export default App;
