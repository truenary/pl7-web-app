declare type fetchDataProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: () => Promise<any>;
};
const fetchData = async ({ func }: fetchDataProp) => {
  try {
    const data = await func();
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Data is not in the expected format:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default fetchData;
