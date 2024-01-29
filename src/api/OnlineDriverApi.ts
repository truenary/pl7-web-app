import { IOnlineDriver } from "./type";

export class OnlineDriverApi implements IOnlineDriver {
  BASE_URL = "http://localhost:8000";

  async getAllOnlineDriver(): Promise<AllOnlineDriver> {
    const response = await fetch(`${this.BASE_URL}/DRIVER`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data: AllOnlineDriver = await response.json();
    return data;
  }
}
