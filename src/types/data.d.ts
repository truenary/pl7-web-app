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
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  billBook_image: string;
  billBook_image: string;
  liscence_number: string;
  liscence_image: string;
  liscence_image: string;
  vehicle_number: string;
  vehicle_color: string;
  vehicle_image: string;
  user: string;
  account_status: string;
  status: string;
  total_rides: number;
  ratings: number;
  joining_date: string;
};
declare type AllDriver = Driver[];
declare type Passenger = {
  id: string;
  first_name: string;
  last_name: string;
  user_image: string;
  user_image: string;
  phone: string;
  address: string;
  user: string;
  status: string;
  total_rides: number;
  joining_date: string;
  address: string;
  user: string;
  status: string;
  total_rides: number;
  joining_date: string;
};
declare type AllPassenger = Passenger[];
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
// declare type AllOnlineDriver = [
//   {
//     id: number;
//     lat: number;
//     lng: number;
//   }
// ];

declare type RefreshTokenRequest = {
  refreshToken: string;
};
declare type TokenResponse = {
  access_token: string;
  refresh_token: string;
};
