declare type User = {
  first_name: string;
  last_name: string;
  address: string;
  user_image: string;
  liscence_number?: string;
  liscence_image?: string;
  vehicle_number?: string;
  vehicle_image?: string;
  vehicle_color?: string;
  billBook_image?: string;
  token: string | undefined;
  phone: string;
  user: string;
  password?: string;
};
declare type VUser = User & {
  id: string;
  account_status?: string;
  status: string;
  total_rides: number;
  ratings: number;
  joining_date: string;
};
declare type ViewUser = VUser[];
declare type Driver = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  billBook_image: string;
  liscence_number: string;
  liscence_image: string;
  vehicle_number: string;
  vehicle_color: string;
  vehicle_image: string;
  user: string;
  account_status;
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
  phone: string;
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
declare type AllOnlineDriver = [
  {
    id: number;
    lat: number;
    lng: number;
  }
];
