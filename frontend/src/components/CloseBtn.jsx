import PropTypes from "prop-types";
import closeBtn from "../assets/icon/croix.png";

function CloseBtn({ setMode }) {
  return (
    <div className="close-container">
      <button
        type="button"
        className="btn-close"
        onClick={() => setMode("path")}
      >
        <img src={closeBtn} alt="" className="close-img" />
      </button>
    </div>
  );
}

CloseBtn.propTypes = {
  setMode: PropTypes.func.isRequired,
};

export default CloseBtn;
