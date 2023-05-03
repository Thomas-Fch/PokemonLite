import PropTypes from "prop-types";
import iconeFight from "../assets/road/rencontre.png";
import Navbar from "./Navbar";

function Path({ handleClick }) {
  return (
    <div className="path">
      <button className="btn-fight" onClick={handleClick} type="submit">
        <img src={iconeFight} alt="icone-fight" className="icone-fight" />
      </button>
      <Navbar />
    </div>
  );
}

Path.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Path;
