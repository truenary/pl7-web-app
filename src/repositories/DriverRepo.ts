import { IDriverApi } from "../api/type";

export interface IDriverRepo {
  getAllDriver(): Promise<AllDriver>;
  getDriverById(id: string): Promise<Driver>;
  verifyDrier(id: string, status: string): Promise<Driver>;
}
export class DriverRepo implements IDriverRepo {
  driverAPI: IDriverApi;
  constructor(driverApi: IDriverApi) {
    this.driverAPI = driverApi;
  }
  async getAllDriver(): Promise<AllDriver> {
    const driverData = await this.driverAPI.getAllDriver();
    return driverData;
  }
  async getDriverById(id: string): Promise<Driver> {
    const driverData = await this.driverAPI.getDriverById(id);
    return driverData;
  }
  async verifyDrier(id: string, status: string): Promise<Driver> {
    return await this.driverAPI.verifyDriver(id, status);
  }
}
