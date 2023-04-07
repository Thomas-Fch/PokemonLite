import { useEffect } from "react";
import Home from "./pages/Home";

import "./App.css";

function App() {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => console.info(data.results));
  });

  return (
    <div className="App">
      <Home />
      <p>coucou</p>
    </div>
  );
}

export default App;
