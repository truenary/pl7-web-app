import { useContext } from "react";
import { RepositoryContext } from "../context/RepositoryContext";
import { useQuery } from "@tanstack/react-query";

export function useRepository() {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within a repository provider");
  }
  return context;
}
export function useDrivers() {
  const { driverRepo } = useRepository();
  const drivers = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const result = await driverRepo.getAllDriver();
      return result;
    },
  });
  return drivers;
}
export function useDriverById(id: string) {
  const { driverRepo } = useRepository();
  const drivers = useQuery({
    queryKey: ["driver"],
    queryFn: async () => {
      const result = await driverRepo.getDriverById(id);
      return result;
    },
  });
  return drivers;
}
