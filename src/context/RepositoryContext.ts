import { createContext } from "react";
import { IUserRepo } from "../repositories/UserRepo";
import { IPassengerRepo } from "../repositories/PassengerRepo";
import { IDriverRepo } from "../repositories/DriverRepo";

export type repositoryContextProps = {
  userRepo: IUserRepo;
  passengerRepo: IPassengerRepo;
  driverRepo: IDriverRepo;
};

export const RepositoryContext = createContext<
  repositoryContextProps | undefined
>(undefined);
