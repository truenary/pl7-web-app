import { deleteIcon } from "../shared/Icons";
import toast from "react-hot-toast";

type tableRowProp = {
  user: Passenger;
  index: number;
};
export default function PassengerTableRow({ user, index }: tableRowProp) {
  function handleDelete() {
    if (confirm("Are you sure you want to delete!") == true) {
      // console.log(report);
      // setReport("");
      toast.error("currently deleting feature is not available");
    }
  }

  return (
    <tr className="bg-white border-b-2 text-center">
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">
        <img src={user.user_image} alt="user image" className="h-10 rounded" />
      </td>
      <td className="px-4 py-2">
        <img src={user.user_image} alt="user image" className="h-10 rounded" />
      </td>
      <td className="px-4 py-2">{`${user.first_name} ${user.last_name}`}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.address}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">{user.joining_date}</td>
      <td className="px-4 py-2">{user.total_rides}</td>
      <td className="px-4 py-2">
        <span
          className={`${
            user.status === ("Inactive" || "Deactive")
              ? "text-white bg-red-500 py-2 px-4 rounded"
              : "text-white bg-green-500 py-2 px-4 rounded"
          }`}
        >
          {user.status}
        </span>
      </td>
      <td className="px-4 py-2">{user.joining_date}</td>
      <td className="px-4 py-2">{user.total_rides}</td>
      <td className="px-4 py-2">
        <span
          className={`${
            user.status === ("Inactive" || "Deactive")
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
      </td>
    </tr>
  );
}
