import React from "react";
import PropTypes from "prop-types";

function PokemonBattleInfo({ name, maxLife, life }) {
  return (
    life && (
      <div className="status">
        <div className="infos">
          <p className="name"> {name} </p>
          <p> Lv. 8 </p>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-value"
            style={{ width: `${(life / maxLife) * 100}%` }}
          />
        </div>
      </div>
    )
  );
}

PokemonBattleInfo.propTypes = {
  name: PropTypes.string.isRequired,
  maxLife: PropTypes.number.isRequired,
  life: PropTypes.number.isRequired,
};

export default PokemonBattleInfo;
