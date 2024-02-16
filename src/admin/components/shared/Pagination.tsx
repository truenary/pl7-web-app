import _ from "lodash";

declare type PaginationProp = {
  postPerPage: number;
  totalPost: number;
  paginate: (number: number) => void;
};

export default function Pagination({
  postPerPage,
  totalPost,
  paginate,
}: PaginationProp) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const containerStyles = "flex items-center -space-x-px h-10 text-base";
  const buttonStyles = "flex items-center justify-center px-4 h-10 leading-tight";
  const textStyles = "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const borderStyles = "border border-gray-300 dark:border-gray-700";
  const bgStyles = "bg-white dark:bg-gray-800";

  return (
    <nav>
      <ul className={containerStyles}>
        {_.map(pageNumbers, (number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`${buttonStyles} ${textStyles} ${borderStyles} ${bgStyles}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
