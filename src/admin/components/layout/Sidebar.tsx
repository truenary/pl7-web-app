import {
  driverIcon,
  homeIcon,
  logoutIcon,
  onlineIcon,
  passengerIcon,
  ratingIcon,
  rideIcon,
} from "../shared/Icons";
import NavItem from "../shared/NavItem";
export default function SideBar() {
  return (
    <div className=" w-64 p-4 text-gray-900 mt-5">
      <nav className="grid justify-between space-y-6 text-base text-center">
        <NavItem to="/admin" text="Dashboard" icon={homeIcon} />
        <NavItem to="onlinedriver" text="Online Driver" icon={onlineIcon} />
        <NavItem to="drivers" text="Drivers" icon={driverIcon} />
        <NavItem to="passengers" text="Passengers" icon={passengerIcon} />
        <NavItem to="ratings" text="Ratings" icon={ratingIcon} />
        <NavItem to="rides" text="Rides" icon={rideIcon} />
        <NavItem to="logout" text="Logout" icon={logoutIcon} />
      </nav>
    </div>
  );
}
