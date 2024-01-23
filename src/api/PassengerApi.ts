import { IPassengerApi } from "./type";

export class PassengerApi implements IPassengerApi {
  BASE_URL = "http://localhost:8000";
  async getAllPassenger(): Promise<ViewUser> {
    const response = await fetch(`${this.BASE_URL}/users?user=passenger`);
    if (!response.ok) {
      throw new Error("Error in fetching passengers");
    }
    const data = response.json();
    // console.log(data);
    return data;
  }
}
