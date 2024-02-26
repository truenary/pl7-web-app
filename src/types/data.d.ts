import { ConfirmationResult } from "firebase/auth";
type formValueData = {
  labelText: string;
  id: string;
  type: string;
  required: boolean;
};
declare type UserRegisterRequest = {
  userImageFile: File;
  firstName: string;
  lastName: string;
  // address: string;
  phoneNumber: string;
  // userRole: string;
  password: string;
  userImage: string;
};

declare type DriverRegisterRequest = UserRegisterRequest & {
  liscenceNumber: string;
  liscenceImage: File; // file
  liscenceImageName: string;
  numberPlate: string;
  color: string;
  vehicleImage: File; //file
  vehicleImageName: string;
  billBookImage: File; //file
  billBookImageName: string;
};
declare type userFormType = {
  firstName: string;
  lastName: string;
  password: string;
  // address: string;
  userImage: FileList;
  [key: string]: string | FileList;
};
declare type driverFormType = {
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  userImage: FileList;
  liscenceImage: FileList;
  billBookImage: FileList;
  vehicleImage: FileList;
  color: string;
  numberPlate: string;
  liscenceNumber: string;
  [key: string]: string | FileList;
};
declare type RegisterResponse = {
  statusCode: number;
  data: {
    _id: string;
  };
  message: string;
  success: boolean;
};
declare type loginRequest = {
  phoneNumber: string;
  password: string;
};
declare type loginResponse = {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    address: string;
    status: boolean;
    phoneNumber: string;
    userRole: string;
    userImage: string;
    totalRide: number;
    createdAt: DateTime;
  };
  accessToken: string;
  refreshToken: string;
};

declare type Driver = {
  driverId: string;
  licenseNumber: string;
  licenseImage: string;
  accountVerifyStatus: boolean;
  availabilityStatus: boolean;
  ratings: number;
  totalRides: number;
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    address: string;
    status: boolean;
    phoneNumber: string;
    userImage: string;
    createdDate: string;
    updatedDate: string;
    role: number;
  };
  vehicle: {
    vehicleId: string;
    vehicleNumber: string;
    vehicleColor: string;
    vehicleImage: string;
    bluebookImage: string;
  };
};
declare type AllDriver = { list: Driver[]; meta: Pagination };
declare type DriverVerifyResponse = {
  _id: string;
  accountVerifyStatus: boolean;
};
declare type Passenger = {
  userId: string;
  firstName: string;
  lastName: string;
  address: string;
  status: boolean;
  phoneNumber: string;
  role: boolean;
  userImage: string;
  totalRide: number;
  createdDate: string;
  updatedDate: string;
};
declare type Pagination = {
  totalPage: number;
  totalItem: number;
  previousPageNumber: number | null;
  currentPageNumber: number;
  nextPageNumber: number | null;
};
declare type AllPassenger = { list: Passenger[]; meta: Pagination };
declare type Ride = {
  rideId: number;
  numberOfPassenger: number;
  rideType: boolean;
  price: number;
  message: string;
  status: string;
  channelId: number;
  driverId: string;
  driver: Driver | null;
  userId: string;
  user: Passenger | null;
  pickupLocation_latitude: number;
  pickupLocation_longitude: number;
  dropLocation_latitude: number;
  dropLocation_longitude: number;
};
declare type ALLRides = {
  list: Ride[];
  meta: Pagination;
};
declare type OnlineDriver = {
  id: number;
  name: string;
  Status: string;
  rating: string;
  lat: number;
  lng: number;
};
declare type OnlineDriverArray = OnlineDriver[];

declare type RefreshTokenRequest = {
  refreshToken: string;
};
declare type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

declare type PassengerTableRowProp = {
  user: Passenger;
  index: number;
};
declare type DriverTableRowProp = {
  user: Driver;
  index: number;
};
declare type TableProp = {
  filterValue: string;
  drivers: AllDriver;
};
declare interface OnlineDriver {
  id: number;
  lat: number;
  lng: number;
}
declare type inputProps = {
  children: string;
  value: string;
  backgroundColor: string;
};
declare type TotalIncomeInputProps = {
  children: number;
  labelText: string;
};

declare type otpFormProps = {
  phone: string;
  confirmed: ConfirmationResult | null;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
};
declare type otpFormData = {
  otp: string;
};
declare type FormWithNumberProp = {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setConfirmed: React.Dispatch<React.SetStateAction<ConfirmationResult | null>>;
  setCurrentForm: React.Dispatch<React.SetStateAction<number>>;
};
