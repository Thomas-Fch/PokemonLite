import React from "react";
import PropTypes from "prop-types";

function GameOver({ setMode }) {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <button
        type="button"
        className="cta-path"
        onClick={() => setMode("start")}
      >
        Go back to path
      </button>
    </div>
  );
}

GameOver.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default GameOver;
