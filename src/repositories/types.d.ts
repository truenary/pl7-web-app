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
  getAllDriver(): Promise<AllDriver | JsonAPIErrorResp | undefined>;
  getDriverById(id: string): Promise<Driver | JsonAPIErrorResp | undefined>;
  verifyDrier(
    id: string
  ): Promise<DriverVerifyResponse | JsonAPIErrorResp | undefined>;
  getAllPassengers(): Promise<AllPassenger | JsonAPIErrorResp | undefined>;
  getPassengerById(
    id: string
  ): Promise<Passenger | JsonAPIErrorResp | undefined>;
  getAllRides(): Promise<ALLRides | JsonAPIErrorResp | undefined>;
  getAllOnlineDriver(): Promise<
    OnlineDriverArray | JsonAPIErrorResp | undefined
  >;
 createBlogPost(
    blogPostData: FormData
  ): Promise<BlogPost | JsonAPIErrorResp | undefined>;

  getAllBlogPosts(): Promise<
    AllBlogPostsResponse | JsonAPIErrorResp | undefined
  >;

  getBlogPostById(
    id: string
  ): Promise<BlogPost | JsonAPIErrorResp | undefined>;

  updateBlogPost(
    id: string,
    updatedBlogPostData: FormData
  ): Promise<RegisterResponse | JsonAPIErrorResp | undefined>;

  deleteBlogPost(id: string): Promise<void>;
}