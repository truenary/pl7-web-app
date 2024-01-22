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
declare type ViewUser = [
  {
    id: string;
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
  }
];
