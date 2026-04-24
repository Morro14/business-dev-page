import { useContext, createContext } from "react";
import { useLeases } from "../hooks/useLeases.ts";

const LeasesContext = createContext();

export function LeasesProvider({ children }) {
  const leasesState = useLeases();
  return (
    <LeasesContext.Provider value={leasesState}>
      {children}
    </LeasesContext.Provider>
  );
}

export function useLeasesContext() {
  return useContext(LeasesContext);
}
