import { IDriverApi } from "../api/type";

export declare interface IDriverRepo {
    getAllDriver(): Promise<ViewUser>;
}
export class DriverRepo implements IDriverRepo {


    driverAPI: IDriverApi;
    constructor(driverApi: IDriverApi) {
        this.driverAPI = driverApi
    }
    getAllDriver(): Promise<ViewUser> {

        const driverData = this.driverAPI.getAllDriver();

        console.log(driverData);
        return driverData;
    }

}