/* eslint-disable react-hooks/rules-of-hooks */
import { useRepository } from "@/hooks/CustomHook";
import { OnlineDriver } from "@/types/data";
import _ from "lodash";

export async function fetchData(): Promise<OnlineDriver[]> {
  const { repo } = useRepository();
  try {
    const data = await repo.getAllOnlineDriver();
    if (_.isArray(data)) {
      return data;
    } else {
      console.error("Data is not in the expected format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


