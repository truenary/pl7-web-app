import { IOnlineDriver } from "../api/type";
//interacting with a OnlineDriver API
export interface IOnlineDriverRepo {
  //declares a method getAllOnlineDriver that returns a promise of type AllOnlineDriver
  getAllOnlineDriver(): Promise<AllOnlineDriver>;
}
//Implementing the Interface:
export class OnlineDriverRepo implements IOnlineDriverRepo {
  OnlineDriverAPI: IOnlineDriver;
  constructor(OnlineDriverApi: IOnlineDriver) {
    this.OnlineDriverAPI = OnlineDriverApi;
  }
  async getAllOnlineDriver(): Promise<AllOnlineDriver> {
    const OnlineDriverData = await this.OnlineDriverAPI.getAllOnlineDriver();

    console.log(OnlineDriverData);
    return OnlineDriverData;
  }
}
