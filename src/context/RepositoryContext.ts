import { createContext } from "react";
import { IUserRepo } from "../Repos/UserRepo";
import { IPassengerRepo } from "../Repos/PassengerRepo";
import { IDriverRepo } from "../Repos/DriverRepo";

export type repositoryContextProps = {
  userRepo: IUserRepo;
  passengerRepo: IPassengerRepo;
  driverRepo: IDriverRepo;
};

export const RepositoryContext = createContext<
  repositoryContextProps | undefined
>(undefined);
