import { useContext } from "react";
import { RepositoryContext } from "../context/RepositoryContext";

export function useRepository() {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within a repository provider");
  }
  return context;
}
