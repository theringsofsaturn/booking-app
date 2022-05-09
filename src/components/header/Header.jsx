import {
  faBed,
  faCalendarDays,
  faCar,
  faLandmark,
  faPerson,
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
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcons" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcons" />
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcons" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
