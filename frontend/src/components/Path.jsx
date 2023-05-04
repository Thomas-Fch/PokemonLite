import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

function Path({ handleClick }) {
  return (
    <>
      <div className="path">
        <Link to="/Path/PokemonGuesser">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button className="btn-fight" onClick={handleClick} type="submit" />
        </Link>
      </div>
      <Navbar />
    </>
  );
}

Path.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Path;
