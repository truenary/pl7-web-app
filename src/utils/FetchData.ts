/*
This method is not used in anywhere.
it is defined for generalizing fetch data
but not worked,

So AVOID THIS FILE
*/

import { JsonAPIErrorResp } from "@/api/type";
import { AllDriver } from "@/types/data";
declare type fetchData = {
  setMethod: (value: React.SetStateAction<AllDriver>) => void;
  repoMethod: () => Promise<AllDriver | JsonAPIErrorResp | undefined>;
};
export const fetchData = async ({ setMethod, repoMethod }: fetchData) => {
  try {
    const data = await repoMethod();
    // Check if data is an array
    if (data && "list" in data && "pagination" in data) {
      setMethod(data);
    } else {
      console.error("Data is not in the expected format:", data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
