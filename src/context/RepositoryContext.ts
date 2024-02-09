import { createContext } from "react";
import { IRepository } from "../repositories/types";

export type repositoryContextProps = {
  repo: IRepository;
};

export const RepositoryContext = createContext<
  repositoryContextProps | undefined
>(undefined);
