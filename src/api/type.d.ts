export declare interface IUserApi {
  createUser(userData: User): Promise<ViewUser | string>;
  getUserByPhone(phone: string): Promise<ViewUser | string>;
  updatePassword(password: string, userId: string): Promise<ViewUser | string>;
}
export declare interface IDriverApi {
  getAllDriver(): Promise<AllDriver>;
}