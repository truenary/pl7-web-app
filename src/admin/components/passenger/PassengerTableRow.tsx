import { Passenger } from "@/types/data";
import toast from "react-hot-toast";
import { deleteIcon } from "../shared/Icons";

interface PassengerTableRowProps {
  user: Passenger;
  index: number;
}

const PassengerTableRow: React.FC<PassengerTableRowProps> = ({ user, index }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      toast.error("Currently deleting feature is not available");
    }
  };

  return (
    <tr className="bg-white border-b-2 text-center">
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">
        <img src={user.userImage} alt="User" className="h-10 rounded" />
      </td>
      <td className="px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
      <td className="px-4 py-2">{user.phoneNumber}</td>
      <td className="px-4 py-2">{user.createddate}</td>
    
      <td className="px-4 py-2">{user.updateddate}</td>
      <td className="px-4 py-2">{user.status}</td>
       <td className="px-4 py-2">{user.userRole}</td>
        
      <td className="px-4 py-2">
        <span className={`${user.status ? "bg-green-500" : "bg-red-500"} text-white py-1 px-4 rounded`}>
          {user.status ? "Active" : "Not Active"}
        </span>
      </td>
      <td className="px-2 py-4">
        <button
          onClick={handleDelete}
          title="Delete"
          className="bg-transparent border-1 rounded-md py-1 px-2 font-normal text-red-600 border-red-600 hover:bg-red-600 hover:text-white text-base"
        >
          {deleteIcon}
        </button>
      </td>
    </tr>
  );
};

export default PassengerTableRow;
