import { IRideApi } from "../api/type";
//interacting with a driver API
export interface IRidesRepo {
    //declares a method getAllDriver that returns a promise of type AllDriver
    getAllRides(): Promise<ALLRides>;
}
//Implementing the Interface:
export class RidesRepo implements IRidesRepo {


    ridesApi: IRideApi;
    constructor(ridesApi: IRideApi) {
        this.ridesApi = ridesApi;
    }
    async getAllRides(): Promise<ALLRides> {

        const ridesData = await this.ridesApi.getAllRide();

        console.log(ridesData);
        return ridesData;
    }

}