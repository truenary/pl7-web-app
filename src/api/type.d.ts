export declare interface IUserApi {
  createUser<User, ViewUser>(userData: User): Promise<ViewUser>;
  // createDriver<Driver, ViewDriver>(userData: Driver): Promise<ViewDriver>;
  getUserByPhone(phone: string): Promise<ViewUser>;
  // getDriverByPhone(phone: string): Promise<ViewDriver>;
}
declare type GetUserResponse = {
  response: ViewDriver | ViewUser | null | undefined;
};
