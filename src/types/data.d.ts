import { ConfirmationResult } from "firebase/auth";

declare type UserRegisterRequest = {
  userImage: File;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  userRole: string;
  password: string;
  userImageName: string;
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
  address: string;
  userImage: FileList;
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
  _id: string;
  liscenceNumber: string;
  liscenceImage: string;
  accountVerifyStatus: boolean;
  availabilityStatus: boolean;
  createdAt: string;
  updatedAt: string;
  ratings: number;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    address: string;
    status: boolean;
    phoneNumber: string;
    userImage: string;
    totalRide: number;
    userRole: string;
  };
  vehicle: {
    _id: string;
    numberPlate: string;
    color: string;
    vehicleImage: string;
    billBookImage: string;
  };
};
declare type AllDriver = { list: Driver[]; pagination: Pagination };
declare type DriverVerifyResponse = {
  _id: string;
  accountVerifyStatus: boolean;
};
declare type Passenger = {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  status: boolean;
  phoneNumber: string;
  userRole: boolean;
  userImage: string;
  totalRide: number;
  createdAt: string;
  updatedAt: string;
};
declare type Pagination = {
  totalPage: number;
  totalItem: number;
  previousPageNumber: number | null;
  currentPageNumber: number;
  nextPageNumber: number | null;
};
declare type AllPassenger = { list: Passenger[]; pagination: Pagination };
declare type ALLRides = [
  {
    id: string;
    PickupLocation: string;
    DropLocation: string;
    NumberOfPassenger: string;
    Price: string;
    Message: string;
    distance: string;
  }
];
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
declare type Rides = {
  id: string;
  PickupLocation: string;
  DropLocation: string;
  NumberOfPassenger: string;
  Price: string;
  Message: string;
  distance: string;
};

declare type PassengerTableRowProp = {
  user: Passenger;
  index: number;
};
declare type DriverTableRowProp = {
  user: Driver;
  index: number;
};
declare type driverTableProp = {
  filterValue: string;
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

declare type BlogPost = {
  _id: string;
  title: string;
  content: string;
  photoUrl: string;
  videoUrl: string;
  createdAt: string;
};

type BlogPostFormData = {
  title: string;
  content: string;
  photo?: FileList;
  video?: FileList;
};

declare type BlogResponse = {
  statusCode: number;
  data: BlogPost;
  message: string;
  success: boolean;
};

declare type AllBlogPostsResponse = {
  list: BlogPost[];
  pagination: Pagination;
};

