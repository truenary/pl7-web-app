import {
  ALLRides,
  AllDriver,
  AllPassenger,
  Driver,
  DriverVerifyResponse,
  OnlineDriverArray,
  Passenger,
  RegisterResponse,
  loginResponse,
} from "@/types/data";
import { IJsonApi, JsonAPIErrorResp, JsonAPIResp } from "@/api/type";
import { IRepository } from "./types";
// import { Data } from "@react-google-maps/api";

export class Repository implements IRepository {
  private _api: IJsonApi;
  constructor(api: IJsonApi) {
    this._api = api;
  }
  private _getResponse<T>(response: JsonAPIResp<T>) {
    return "data" in response
      ? response.data
      : "errors" in response
      ? response
      : undefined;
  }
  async registerUser(
    userDetails: FormData | null
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined> {
    const responseData = await this._api.post<RegisterResponse>(
      `users/register/passenger`,
      userDetails,
      undefined,
      false
    );
    console.log("at repository ", responseData);
    return this._getResponse(responseData);
  }

  async registerDriver(
    driverInfo: FormData | null
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined> {
    const responseData = await this._api.post<RegisterResponse>(
      `users/register/driver`,
      driverInfo,
      undefined,
      false
    );
    console.log("at repository", responseData);
    return this._getResponse(responseData);
  }
  async login(
    loginInfo: FormData | null
  ): Promise<JsonAPIErrorResp | loginResponse | undefined> {
    const responseData = await this._api.post<loginResponse>(
      `users/login`,
      loginInfo,
      undefined,
      false
    );
    return this._getResponse(responseData);
  }
  async isPhoneExist(
    phoneNumber: string
  ): Promise<boolean | JsonAPIErrorResp | undefined> {
    const responseData = await this._api.get<boolean>(
      `users/checkPhone/${phoneNumber}`
    );

    return this._getResponse(responseData);
  }
  async getAllDriver(
    pageNumber: number
  ): Promise<JsonAPIErrorResp | AllDriver | undefined> {
    // console.log("api", this._api);
    const responseData = await this._api.get<AllDriver>(
      `driver?page=${pageNumber}`
    );
    console.log(responseData);
    return this._getResponse(responseData);
  }
  async getDriverById(
    id: string
  ): Promise<JsonAPIErrorResp | Driver | undefined> {
    const responseData = await this._api.get<Driver>(
      `users/driver/${id}`,
      undefined,
      true
    );
    console.log("getDriverById:", responseData);
    return this._getResponse(responseData);
  }
  async verifyDrier(
    id: string
  ): Promise<JsonAPIErrorResp | DriverVerifyResponse | undefined> {
    const responseData = await this._api.get<DriverVerifyResponse>(
      `users/verifyDriver/${id}`
    );
    return this._getResponse(responseData);
  }
  async getAllPassengers(
    pageNumber: number
  ): Promise<JsonAPIErrorResp | AllPassenger | undefined> {
    const responseData = await this._api.get<AllPassenger>(
      `user?page=${pageNumber}`
    );
    console.log("at repository", responseData);
    return this._getResponse(responseData);
  }
  async getPassengerById(
    id: string
  ): Promise<JsonAPIErrorResp | Passenger | undefined> {
    const responseData = await this._api.get<Passenger>(
      `users/passenger/get/${id}`
    );
    return this._getResponse(responseData);
  }
  async getAllRides(
    pageNumber: number
  ): Promise<JsonAPIErrorResp | ALLRides | undefined> {
    const responseData = await this._api.get<ALLRides>(
      `ride?page=${pageNumber}`,
      undefined,
      true
    );
    return this._getResponse(responseData);
  }
  async getAllOnlineDriver(): Promise<
    JsonAPIErrorResp | OnlineDriverArray | undefined
  > {
    const responseData = await this._api.get<OnlineDriverArray>(
      `driver/onlineDriver/get`
    );
    return this._getResponse(responseData);
  }
  async updateDriverInfo(
    userDetails: FormData | null
  ): Promise<Driver | JsonAPIErrorResp | undefined> {
    const responseData = await this._api.put<RegisterResponse>(
      `path`,
      userDetails,
      undefined,
      false
    );
    console.log("at repository ", responseData);
    return this._getResponse(responseData);
  }
}
