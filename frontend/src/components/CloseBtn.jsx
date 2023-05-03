import { Link } from "react-router-dom";
import closeBtn from "../assets/icon/croix.png";

function CloseBtn() {
  return (
    <Link className="close-container" to="/Path">
      <button type="button" className="btn-close">
        <img src={closeBtn} alt="" className="close-img" />
      </button>
    </Link>
  );
}

export default CloseBtn;
