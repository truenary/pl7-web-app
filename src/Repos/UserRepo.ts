import { IUserApi } from "../api/type";

export declare interface IUserRepo {
  registerUser<User, ViewUser>(user: User): Promise<ViewUser>;
  // registerDriver<Driver, ViewDriver>(user: Driver): Promise<ViewDriver>;
  isUserExist(phone: string): Promise<ViewUser>;
  // isDriverExist(phone: string): Promise<ViewDriver>;
}
export class UserRepo implements IUserRepo {
  userAPI: IUserApi;
  constructor(userApi: IUserApi) {
    this.userAPI = userApi;
  }
  isUserExist(phone: string): Promise<ViewUser> {
    return this.userAPI.getUserByPhone(phone);
  }
  // isDriverExist(phone: string): Promise<ViewDriver> {
  //   return this.userAPI.getDriverByPhone(phone);
  // }

  registerUser<User, ViewUser>(user: User): Promise<ViewUser> {
    return this.userAPI.createUser(user);
  }
  // registerDriver<Driver, ViewDriver>(user: Driver): Promise<ViewDriver> {
  //   return this.userAPI.createUser(user);
  // }
}
