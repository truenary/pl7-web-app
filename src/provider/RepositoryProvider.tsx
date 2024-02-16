import {
  RepositoryContext,
  repositoryContextProps,
} from "../context/RepositoryContext";
import { API } from "../api/Api";
import { IStorageClient } from "../storage/types";
import { LocalStorageClient } from "../storage/Storage";
import { IRepository } from "../repositories/types";
import { Repository } from "../repositories/Repository";
import { IJsonApi } from "../api/type";

declare type props = {
  children: React.ReactNode;
};
export function RepositoryProvider({ children }: props) {
  const base_url: string = import.meta.env.VITE_BASE_URL;
  const storage: IStorageClient = new LocalStorageClient(window.localStorage);
  const api: IJsonApi = new API(base_url, storage);
  const repo: IRepository = new Repository(api);
  const contextValue: repositoryContextProps = {
    repo,
  };

  return (
    <RepositoryContext.Provider value={contextValue}>
      {children}
    </RepositoryContext.Provider>
  );
}
