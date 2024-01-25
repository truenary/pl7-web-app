declare type User = {
  first_name: string;
  last_name: string;
  liscence_number?: string;
  liscence_image?: string;
  vehicle_number?: string;
  vehicle_image?: string;
  vehicle_color?: string;
  token: string | undefined;
  phone: string;
  user: string;
  password?: string;
};
declare type VUser = User & {
  id: string;
};
declare type ViewUser = VUser[];
declare type Driver = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  liscence_number: string;
  vehicle_number: string;
  vehicle_color: string;
};
declare type AllDriver = Driver[];
declare type Passenger = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
};
declare type AllPassenger = Passenger[];
