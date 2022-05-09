import {
  faBed,
  faCar,
  faLandmark,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Bedrooms</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faLandmark} />
            <span>Atractions</span>
          </div>
        </div>
        <h1 className="headerTitle">
          Flash sale on now! Get 30% off until Sunday, online at Saturn Travel.
        </h1>
        <p className="headerDesc">
          Book the best Hotels for your vacation with cheap prices!
        </p>
        <button className="headerButton">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
