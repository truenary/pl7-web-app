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
  async getDriverById(id: string): Promise<Driver> {
    const response = await fetch(`${this.BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    return data;
  }
  async verifyDriver(id: string, status: string): Promise<Driver> {
    const response = await fetch(`${this.BASE_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: status }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
}
