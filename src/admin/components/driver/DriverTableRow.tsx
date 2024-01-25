import { useNavigate } from "react-router-dom";
import { deleteIcon, editIcon, explore } from "../shared/Icons";

type tableRowProp = {
  user: Driver;
  index: number;
};
export default function DriverTableRow({ user, index }: tableRowProp) {
  const navigate = useNavigate();
  function handleEdit() {
    console.log("user id:" + user.id);
  }
  function handleExplore() {
    console.log("userid :" + user.id);
    navigate(`${user.id}`);
  }
  return (
    <tr className="bg-white border-b-2 text-center" key={index}>
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">{`${user.first_name} ${user.last_name}`}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">{user.joining_date}</td>
      <td className="px-4 py-2">{user.total_rides}</td>
      <td className="px-4 py-2">{user.ratings}</td>
      <td
        className={`px-4 py-2 ${
          user.status === "Not Verified" ? "text-red-500" : "text-green-500"
        }`}
      >
        {user.status}
      </td>
      <td className="px-2 py-4">
        <button
          onClick={handleEdit}
          title="Edit"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white  text-base"
        >
          {editIcon}
        </button>
        <button
          title="Delete"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-red-600 border-red-600 hover:bg-red-600  hover:text-white  text-base"
        >
          {deleteIcon}
        </button>
        <button
          onClick={handleExplore}
          title="View"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-green-600 border-green-600 hover:bg-green-600 hover:text-white  text-base"
        >
          {explore}
        </button>
      </td>
    </tr>
  );
}
