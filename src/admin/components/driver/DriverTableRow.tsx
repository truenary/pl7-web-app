import { useNavigate } from "react-router-dom";
import { deleteIcon, explore } from "../shared/Icons";
import toast from "react-hot-toast";

type tableRowProp = {
  user: Driver;
  index: number;
};
export default function DriverTableRow({ user, index }: tableRowProp) {
  const navigate = useNavigate();
  function handleExplore() {
    console.log("userid :" + user.id);
    navigate(`${user.id}`);
  }
  function handleDelete() {
    if (confirm("Are you sure you want to delete!") == true) {
      // console.log(report);
      // setReport("");
      toast.error("currently deleting feature is not available");
    }
  }
  function handleExplore() {
    console.log("userid :" + user.id);
    navigate(`${user.id}`);
  }
  function handleDelete() {
    if (confirm("Are you sure you want to delete!") == true) {
      // console.log(report);
      // setReport("");
      toast.error("currently deleting feature is not available");
    }
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
      <td className={`px-4 py-2 `}>
        <span
          className={`${user.account_status === ("Not Verified" || "not verified")
            ? "text-white bg-red-500 py-2 px-4 rounded"
            : "text-white bg-green-500 py-2 px-4 rounded"
            }`}
        >
          {user.account_status}
        </span>
      </td>
      <td className={`px-4 py-2 `}>
        <span
          className={`${user.status === ("Inactive" || "Deactive")
            ? "text-white bg-red-500 py-2 px-4 rounded"
            : "text-white bg-green-500 py-2 px-4 rounded"
            }`}
        >
          {user.status}
        </span>
      </td>
      <td className="px-2 py-4">
        <button
          onClick={handleDelete}
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
