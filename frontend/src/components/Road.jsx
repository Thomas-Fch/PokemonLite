import React from "react";
import iconeFight from "../assets/road/rencontre.png";

function Road() {
  const handleClick = () => {
    console.info("FIGHT!!!");
  };
  return (
    <div className="road">
      <button className="btn-fight" onClick={handleClick} type="submit">
        <img src={iconeFight} alt="icone-fight" className="icone-fight" />
      </button>
    </div>
  );
}

export default Road;
