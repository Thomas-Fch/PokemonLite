import React, { useEffect, useState } from "react";
import Pokemon from "./Classes/Pokemon";
import Path from "./components/Path";
import PokemonGuesser from "./components/PokemonGuesser";

// import Battle from "./components/Battle";
// import GameOver from "./components/GameOver";
// import Navbar from "./components/Navbar";
// import GetStarter from "./components/GetStarter";

import "./App.scss";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState([]);

  // const [arena, setArena] = useState({});
  const [mode, setMode] = useState("guessPokemon");
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

      setPokemonsArray(pokemons);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setMode("guessPokemon");
  };
  // const arena = new Arena(pokemonsArray[0], pokemonsArray[18]);

  // useEffect(() => {
  //   setArena(new Arena(pokemonsArray[0], pokemonsArray[24]));
  // }, [pokemonsArray]);

  // const handleArenaChange = (newArena) => {
  //   setArena(newArena);
  // };

  const getRandomIndex = (maxIndex) => {
    return 1 + Math.floor(Math.random() * maxIndex);
  };

  const index = getRandomIndex(200);

  return (
    <div>
      {console.info(pokemonsArray[0])}
      {mode === "path" && <Path handleClick={handleClick} />}

      {mode === "guessPokemon" && (
        <PokemonGuesser
          pokemonToGuess={pokemonsArray[index]}
          setMode={setMode}
        />
      )}
      {/* {mode === "battle" && (
        <Battle
          handleArenaChange={handleArenaChange}
          arena={arena}
          mode={mode}
          setMode={setMode}
        />
      )}
      {mode === "gameOver" && <GameOver setMode={setMode} />} */}

      {/* <GetStarter pokemon={pokemonsStarter} setPokemonTeam={setPokemonTeam} /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
