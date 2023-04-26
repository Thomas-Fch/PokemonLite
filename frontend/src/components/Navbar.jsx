import { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // <Router>
    <nav style={open ? { bottom: "0%" } : { bottom: "-11%" }}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="arrowWrapper" onClick={() => setOpen(!open)}>
        <div
          className="arrowUp"
          style={
            open ? { transform: "scaleY(-1)" } : { transform: "scaleY(1)" }
          }
        />
      </div>
      <figure>
        <img src="./src/assets/icon/sac-a-dos.png" alt="backapck" />
        <figcaption>Bag</figcaption>
      </figure>
      <figure>
        <img src="./src/assets/icon/pokeball.png" alt="pokeball" />
        <figcaption>Team</figcaption>
      </figure>
      <figure>
        <img src="./src/assets/icon/parameter.png" alt="gear" />
        <figcaption>Parameter</figcaption>
      </figure>
      <figure>
        <img src="./src/assets/icon/carte.png" alt="map" />
        <figcaption>Map</figcaption>
      </figure>
      <figure>
        <img src="./src/assets/icon/livre.png" alt="book" />
        <figcaption>Pokedex</figcaption>
      </figure>
    </nav>
    // </Router>
  );
}

export default Navbar;
