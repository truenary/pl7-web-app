import { IUserApi } from "./type";

export class UserApi implements IUserApi {
  BASE_URL = "http://localhost:8000";
  // async getDriverByPhone(phone: string): Promise<ViewDriver> {
  //   const driverResponse = await fetch(
  //     `${this.BASE_URL}/drivers?phone=${phone}`
  //   );
  //   return await driverResponse.json();
  // }

  async getUserByPhone(phone: string): Promise<ViewUser> {
    const userResponse = await fetch(`${this.BASE_URL}/users?phone=${phone}`);
    return await userResponse.json();
  }

  async createUser<User, ViewUser>(userData: User): Promise<ViewUser> {
    const response = await fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
  // async createDriver<Driver, ViewDriver>(
  //   userData: Driver
  // ): Promise<ViewDriver> {
  //   const response = await fetch(`${this.BASE_URL}/drivers`, {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   return data;
  // }
}
