import { deleteIcon, editIcon, explore } from "../shared/Icons";

type tableRowProp = {
  user: Passenger;
  index: number;
};
export default function PassengerTableRow({ user, index }: tableRowProp) {
  return (
    <tr className="bg-white border-b-2 text-center">
      <td className="px-4 py-2">{(index + 1).toString()}</td>
      <td className="px-4 py-2">{`${user.first_name} ${user.last_name}`}</td>
      <td className="px-4 py-2">{}</td>
      <td className="px-4 py-2">{user.phone}</td>
      <td className="px-4 py-2">date</td>
      <td className="px-4 py-2">total rides</td>
      <td className="px-4 py-2">status</td>
      <td className="px-2 py-4">
        <button
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
          title="View"
          className="bg-transparent border-1  rounded-md py-1 px-2 font-normal text-green-600 border-green-600 hover:bg-green-600 hover:text-white  text-base"
        >
          {explore}
        </button>
      </td>
    </tr>
  );
}
