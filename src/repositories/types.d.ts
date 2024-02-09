import { JsonAPIErrorResp } from "../api/type";
export interface IRepository {
  registerUser(
    userDetails: FormData | null
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined>;
  registerDriver(
    driverInfo: FormData | null
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined>;
  login(
    loginInfo: FormData
  ): Promise<loginResponse | JsonAPIErrorResp | undefined>;
  isPhoneExist(
    phoneNumber: string
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined>;
  getAllDriver(): Promise<AllDriver | JsonAPIErrorResp | undefined>;
  getDriverById(id: string): Promise<Driver | JsonAPIErrorResp | undefined>;
  verifyDrier(id: string): Promise<Driver | JsonAPIErrorResp | undefined>;
  getAllPassengers(): Promise<AllPassenger | JsonAPIErrorResp | undefined>;
  getPassengerById(
    id: string
  ): Promise<Passenger | JsonAPIErrorResp | undefined>;
  getAllRides(): Promise<ALLRides | JsonAPIErrorResp | undefined>;
  getAllOnlineDriver(): Promise<
    OnlineDriverArray | JsonAPIErrorResp | undefined
  >;
}
