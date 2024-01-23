import { IDriverApi } from "./type";

export class DriverApi implements IDriverApi {
  BASE_URL = "http://localhost:8000";
  async getAllDriver(): Promise<AllDriver> {
    const response = await fetch(`${this.BASE_URL}/users?user=driver`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data: AllDriver = await response.json();
    return data;
  }
}
