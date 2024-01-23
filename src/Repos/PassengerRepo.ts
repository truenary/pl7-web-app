import { IPassengerApi } from "../api/type";

export declare interface IPassengerRepo {
  getAllPassengers(): Promise<ViewUser>;
}
export class PassengerRepo implements IPassengerRepo {
  api: IPassengerApi;
  constructor(API: IPassengerApi) {
    this.api = API;
  }
  async getAllPassengers(): Promise<ViewUser> {
    const data = await this.api.getAllPassenger();
    // console.log(data);
    return data;
  }
}
