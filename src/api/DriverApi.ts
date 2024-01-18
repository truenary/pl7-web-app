export declare interface IDriverApi {
  registerUser(driverData: Driver): Promise<Driver>;
}
export class DriverApi implements IDriverApi {
  BASE_URL = "";
  async registerUser(driverData: Driver): Promise<ViewDriver> {
    const response = await fetch(this.BASE_URL, {
      method: "POST",
      body: JSON.stringify(driverData),
      headers: {
        Content_Type: "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
}
