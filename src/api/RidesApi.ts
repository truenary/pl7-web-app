import { IRideApi } from "./type";

export class RidesApi implements IRideApi {
    BASE_URL = "http://localhost:8000";

    async getAllRide(): Promise<ALLRides> {
        const response = await fetch(`${this.BASE_URL}/rides`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const data: ALLRides = await response.json();
        return data;
    }
}