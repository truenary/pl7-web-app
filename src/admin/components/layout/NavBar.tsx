import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Logo from "./logo.jpg";
import userImage from "./SagarImage.jpg";
export default function NavBar() {
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const notificationIcon = <FontAwesomeIcon icon={faBell} size="lg" />;
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-white text-black h-17 border flex items-center py-5">
      <div
        className="mx-5 cursor-pointer flex space-x-5 justify-center items-center"
        onClick={() => navigate("/admin")}
      >
        <img src={Logo} alt="image" className="h-10" />
        <span className="text-xl font-bold">Dhoka</span>
      </div>
      <div className="relative left-24 ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Here"
          className="bg-blue-50 h-10 px-10 rounded-md w-96 border focus:outline-none focus:border-green-700"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {searchIcon}
        </div>
      </div>
      <div className="absolute right-10 flex text-lg space-x-8 items-center">
        <div className="">{notificationIcon}</div>
        <div className="flex items-center">
          <img
            src={userImage}
            alt="userImage"
            className="h-8 w-8 rounded-full"
          />
          <div className="ms-2 grid ">
            <span className="font-medium text-base">Sagar Adhikari</span>
            <span className="text-sm">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
