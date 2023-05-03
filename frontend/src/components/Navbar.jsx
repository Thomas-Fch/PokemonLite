import { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line consistent-return
  const logique = () => {
    if (window.innerWidth < 1024) {
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      return (
        <nav style={open ? { bottom: "0%" } : { bottom: "-4rem" }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="arrowWrapper"
            onClick={() => setOpen(!open)}
            style={{ justifyContent: "center" }}
          >
            <div
              className="arrowUp"
              style={
                open ? { transform: "scaleY(-1)" } : { transform: "scaleY(1)" }
              }
            />
          </div>
          <div className="figureWrapper">
            <figure>
              <img src="./src/assets/icon/sac-a-dos.png" alt="backapck" />
              <figcaption>Bag</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/pokeball.png" alt="pokeball" />
              <figcaption>Team</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/carte.png" alt="map" />
              <figcaption>Map</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/livre_black.png" alt="book" />
              <figcaption>Pokedex</figcaption>
            </figure>
          </div>
          <img
            src="./src/assets/icon/fondpokeball.png"
            alt="pokeball"
            className="backgroundPokeball"
          />
        </nav>
      );
    }
    if (window.innerWidth >= 1024) {
      return (
        <nav style={open ? { left: "0%" } : { left: "-11.5rem" }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="arrowWrapper"
            onClick={() => setOpen(!open)}
            style={{ justifyContent: "flex-start" }}
          >
            <div
              className="arrowLeft"
              style={
                open ? { transform: "scaleX(1)" } : { transform: "scaleX(-1)" }
              }
            />
          </div>
          <div className="figureWrapper">
            <figure>
              <img src="./src/assets/icon/sac-a-dos.png" alt="backapck" />
              <figcaption>Bag</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/pokeball.png" alt="pokeball" />
              <figcaption>Team</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/carte.png" alt="map" />
              <figcaption>Map</figcaption>
            </figure>
            <figure>
              <img src="./src/assets/icon/livre_black.png" alt="book" />
              <figcaption>Pokedex</figcaption>
            </figure>
          </div>
          <img
            src="./src/assets/icon/fondpokeball.png"
            alt="pokeball"
            className="backgroundPokeball"
          />
        </nav>
      );
    }
  };
  return (
    // <Router>
    <div>{logique()}</div>
    // </Router>
  );
}

export default Navbar;
