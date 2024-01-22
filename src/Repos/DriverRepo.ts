import { IDriverApi } from "../api/type";
//interacting with a driver API
export interface IDriverRepo {
    //declares a method getAllDriver that returns a promise of type AllDriver
    getAllDriver(): Promise<AllDriver>;
}
//Implementing the Interface:
export class DriverRepo implements IDriverRepo {


    driverAPI: IDriverApi;
    constructor(driverApi: IDriverApi) {
        this.driverAPI = driverApi;
    }
    async getAllDriver(): Promise<AllDriver> {

        const driverData = await this.driverAPI.getAllDriver();

        console.log(driverData);
        return driverData;
    }

}