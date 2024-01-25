import { IUserApi } from "./type";

declare type FinalUser = User & {
  status: string;
  total_rides: number;
  ratings?: number;
  joining_date: string;
};
export class UserApi implements IUserApi {
  BASE_URL = "http://localhost:8000";

  _getResponse(response: Response): string {
    if (!response.ok) {
      let errorMessage = "";
      if (response.status === 404) {
        errorMessage = "Resource not found";
      } else if (response.status === 500) {
        errorMessage = "Internal server error";
      } else {
        errorMessage = `HTTP error! status:${response.status}`;
      }
      return errorMessage;
    }
    return "ok";
  }
  async updatePassword(
    passwordData: string,
    userId: string
  ): Promise<ViewUser | string> {
    const response = await fetch(`${this.BASE_URL}/users/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({ password: passwordData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = this._getResponse(response);
    if (message === "ok") {
      return response.json();
    } else {
      return message;
    }
  }

  async getUserByPhone(phone: string): Promise<ViewUser | string> {
    const response = await fetch(`${this.BASE_URL}/users?phone=${phone}`);
    const message = this._getResponse(response);
    if (message === "ok") {
      return response.json();
    } else {
      return message;
    }
  }

  async createUser(userData: User): Promise<ViewUser | string> {
    let newUserData: FinalUser | undefined;
    userData.user === "driver"
      ? (newUserData = {
          ...userData,
          status: "Not Verified",
          joining_date: new Date().toDateString(),
          total_rides: 0,
          ratings: 5,
        })
      : userData.user === "passenger"
      ? (newUserData = {
          ...userData,
          status: "Inactive",
          joining_date: new Date().toDateString(),
          total_rides: 0,
        })
      : undefined;
    const response = await fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = this._getResponse(response);
    if (message === "ok") {
      return response.json();
    } else {
      return message;
    }
  }
}
