import {
  ALLRides,
  AllDriver,
  AllPassenger,
  Driver,
  OnlineDriverArray,
  Passenger,
  RegisterResponse,
  loginResponse,
} from "@/types/data";
import { IJsonApi, JsonAPIErrorResp, JsonAPIResp } from "@/api/type";
import { IRepository } from "./types";

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
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined> {
    const responseData = await this._api.get<RegisterResponse>(
      `users/checkPhone/${phoneNumber}`
    );
    return this._getResponse(responseData);
  }
  async getAllDriver(): Promise<JsonAPIErrorResp | AllDriver | undefined> {
    const responseData = await this._api.get<RegisterResponse>(`checkPhone`);
    return this._getResponse(responseData);
  }
  async getDriverById(
    id: string
  ): Promise<JsonAPIErrorResp | Driver | undefined> {
    const responseData = await this._api.get<RegisterResponse>(
      `getDriver/${id}`
    );
    return this._getResponse(responseData);
  }
  async verifyDrier(
    id: string
  ): Promise<JsonAPIErrorResp | Driver | undefined> {
    const responseData = await this._api.get<RegisterResponse>(
      `getDriver/${id}`
    );
    return this._getResponse(responseData);
  }
  async getAllPassengers(): Promise<
    JsonAPIErrorResp | AllPassenger | undefined
  > {
    const responseData = await this._api.get<RegisterResponse>(`getDriver`);
    return this._getResponse(responseData);
  }
  async getPassengerById(
    id: string
  ): Promise<JsonAPIErrorResp | Passenger | undefined> {
    const responseData = await this._api.get<RegisterResponse>(
      `getDriver/${id}`
    );
    return this._getResponse(responseData);
  }
  async getAllRides(): Promise<JsonAPIErrorResp | ALLRides | undefined> {
    const responseData = await this._api.get<RegisterResponse>(`getD`);
    return this._getResponse(responseData);
  }
  async getAllOnlineDriver(): Promise<
    JsonAPIErrorResp | OnlineDriverArray | undefined
  > {
    const responseData = await this._api.get<RegisterResponse>(`getDriver`);
    return this._getResponse(responseData);
  }
}
