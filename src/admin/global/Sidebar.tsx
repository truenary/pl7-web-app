import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    // faGear,
    faHouse,
    // faList,
    // faRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    const homeIcon = <FontAwesomeIcon icon={faHouse} />;
    const guestIcon = <FontAwesomeIcon icon={faUser} />;
    const bookingIcon = <FontAwesomeIcon icon={faBook} />;
    // const settingIcon = <FontAwesomeIcon icon={faGear} />;
    // const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;
    // const logIcon = <FontAwesomeIcon icon={faList} />;

    return (
        <div className="w-64 p-4 text-gray-900 mt-5">
            <nav className="grid justify-between space-y-6 text-base ">
                <NavLink to="dashboard" className="nav-link  " title="Dashboard">
                    {homeIcon} Dashboard
                </NavLink>
                <NavLink to="onlinedriver" className="nav-link  " title="Online_driver">
                    {guestIcon} Online Driver
                </NavLink>
                <NavLink to="driverDetails" className="nav-link  " title="Drivers">
                    {guestIcon} Drivers Details
                </NavLink>
                <NavLink to="passengers" className="nav-link  " title="Passengers">
                    {bookingIcon} Passengers
                </NavLink>
                <NavLink to="Rating" className="nav-link  " title="Driver Rating">
                    {bookingIcon}  Driver Rating
                </NavLink>
                <NavLink to="rides" className="nav-link  " title=" Rides Details">
                    {bookingIcon} Rides Details
                </NavLink>

            </nav>
        </div>
    );
};

export default SideBar;
