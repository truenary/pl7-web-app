import _ from "lodash";

declare type paginationProp = {
  postPerPage: number;
  totalPost: number;
  paginate: (number: number) => void;
};
export default function Pagination({
  postPerPage,
  totalPost,
  paginate,
}: paginationProp) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  //   flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
  //   z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white
  return (
    <nav>
      <ul className="flex items-center -space-x-px h-10 text-base">
        {
          _.map(pageNumbers,(number)=>(
            
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {number}
            </button>
          </li>

          ))
        }
      </ul>
    </nav>
  );
}
