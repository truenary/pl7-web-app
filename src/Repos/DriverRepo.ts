import { IDriverApi } from "../api/type";

export interface IDriverRepo {
    getAllDriver(): Promise<AllDriver>;
}
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