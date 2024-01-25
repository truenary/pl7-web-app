import { DriverRepo, IDriverRepo } from "../repositories/DriverRepo";
import { IPassengerRepo, PassengerRepo } from "../repositories/PassengerRepo";
import { IUserRepo, UserRepo } from "../repositories/UserRepo";
import { DriverApi } from "../api/DriverApi";
import { PassengerApi } from "../api/PassengerApi";
import { UserApi } from "../api/UserApi";
import { IDriverApi, IPassengerApi, IUserApi } from "../api/type";
import {
  RepositoryContext,
  repositoryContextProps,
} from "../context/RepositoryContext";

declare type props = {
  children: React.ReactNode;
};
export function RepositoryProvider({ children }: props) {
  const driverApi: IDriverApi = new DriverApi();
  const driverRepo: IDriverRepo = new DriverRepo(driverApi);

  const passengerApi: IPassengerApi = new PassengerApi();
  const passengerRepo: IPassengerRepo = new PassengerRepo(passengerApi);

  const userApi: IUserApi = new UserApi();
  const userRepo: IUserRepo = new UserRepo(userApi);

  const contextValue: repositoryContextProps = {
    userRepo,
    passengerRepo,
    driverRepo,
  };

  return (
    <RepositoryContext.Provider value={contextValue}>
      {children}
    </RepositoryContext.Provider>
  );
}
