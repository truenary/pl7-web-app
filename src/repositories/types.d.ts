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
  ): Promise<boolean | JsonAPIErrorResp | undefined>;
  getAllDriver(
    pageNumber: number
  ): Promise<AllDriver | JsonAPIErrorResp | undefined>;
  getDriverById(id: string): Promise<Driver | JsonAPIErrorResp | undefined>;
  verifyDrier(
    id: string
  ): Promise<DriverVerifyResponse | JsonAPIErrorResp | undefined>;
  getAllPassengers(
    pageNumber: number
  ): Promise<AllPassenger | JsonAPIErrorResp | undefined>;
  getPassengerById(
    id: string
  ): Promise<Passenger | JsonAPIErrorResp | undefined>;
  getAllRides(
    pageNumber: number
  ): Promise<ALLRides | JsonAPIErrorResp | undefined>;
  getAllOnlineDriver(): Promise<
    OnlineDriverArray | JsonAPIErrorResp | undefined
  >;
  updateDriverInfo(
    userDetails: FormData | null
  ): Promise<Driver | JsonAPIErrorResp | undefined>;
}
