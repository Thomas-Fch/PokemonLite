import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [pokemonsArray, setPokemonsArray] = useState;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`)
      .then((response) => response.json())
      .then((data) => setPokemonsArray(data.results));
  }, []);

  return (
    <div className="App">
      <Home />
      <p>{pokemonsArray.map((pokemon) => pokemon)}</p>
    </div>
  );
}
export default App;
