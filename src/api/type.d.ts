export declare interface IUserApi {
  createUser(userData: User): Promise<ViewUser | string>;
  getUserByPhone(phone: string): Promise<ViewUser | string>;
  updatePassword(password: string, userId: string): Promise<ViewUser | string>;
}
export declare interface IDriverApi {
  getAllDriver(): Promise<AllDriver>;
  getDriverById(id: string): Promise<Driver>;
  verifyDriver(id: string, status: string): Promise<Driver>;
}
export declare interface IPassengerApi {
  getAllPassenger(): Promise<ViewUser>;
}
export declare interface IOnlineDriver {
  getAllOnlineDriver(): Promise<OnlineDriver>;
}

export declare interface IRideApi {
  getAllRide(): Promise<ALLRides>;
}
