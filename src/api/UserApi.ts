import { IUserApi } from "./type";

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
    const response = await fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
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
