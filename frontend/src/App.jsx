import React from "react";
import Bag from "./components/Bag";
import Road from "./components/Road";
import "./App.css";

function App() {
  // const [pokemonsArray, setPokemonsArray] = useState;
  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`)
  //     .then((response) => response.json())
  //     .then((data) => setPokemonsArray(data.results));
  // }, []);

  return (
    <div>
      <Road />
      <Bag />
    </div>
  );
}

export default App;
