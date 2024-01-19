import { IUserApi } from "../api/type";

type loginResponse = {
  isExist: boolean;
  role: string | undefined;
  password: string | undefined;
  id: string | undefined;
};
export declare interface IUserRepo {
  registerUser(user: User): Promise<ViewUser | string>;
  isUserExist(phone: string): Promise<boolean | string>;
  login(phone: string): Promise<loginResponse | string>;
  addPassword(
    password: string,
    id: string | undefined
  ): Promise<ViewUser | string>;
}
export class UserRepo implements IUserRepo {
  userAPI: IUserApi;
  constructor(userApi: IUserApi) {
    this.userAPI = userApi;
  }
  async addPassword(
    password: string,
    id: string | undefined
  ): Promise<ViewUser | string> {
    if (id !== undefined) {
      const response = await this.userAPI.updatePassword(password, id);
      if (typeof response === "string") {
        return response;
      }
      return response;
    } else {
      return "id can not be undefined";
    }
  }
  async login(phone: string): Promise<loginResponse | string> {
    const response = await this.userAPI.getUserByPhone(phone);
    if (typeof response !== "string") {
      const isExist = response.length > 0 ? true : false;
      const role = isExist ? response[response.length - 1].user : undefined;
      const id = isExist ? response[response.length - 1].id : undefined;
      const password = role !== undefined ? response[0].password : undefined;

      const res: loginResponse = { isExist, role, password, id };
      return res;
    } else {
      return response;
    }
  }
  async isUserExist(phone: string): Promise<boolean | string> {
    const response = await this.userAPI.getUserByPhone(phone);
    if (typeof response !== "string") {
      const isExist = response.length > 0 ? true : false;
      return isExist;
    } else {
      return response;
    }
  }
  async registerUser(user: User): Promise<ViewUser | string> {
    const response = await this.userAPI.createUser(user);
    if (typeof response === "string") {
      return response;
    }
    return response;
  }
}
