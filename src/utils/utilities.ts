export function capitalize(word: string) {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}
export const InitialStateData = {
  list: [],
  pagination: {
    totalPage: 0,
    totalItem: 0,
    previousPageNumber: null,
    currentPageNumber: 0,
    nextPageNumber: null,
  },
};
