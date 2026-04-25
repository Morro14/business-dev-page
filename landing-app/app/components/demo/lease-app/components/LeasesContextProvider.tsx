import {
  useContext,
  createContext,
  useState,
  type SetStateAction,
} from "react";
import { useLeases } from "../hooks/useLeases.ts";

interface LeaseContext {
  leasesState: ReturnType<typeof useLeases>;
  createLeaseError: string | null;
  setCreateLeaseError: React.Dispatch<SetStateAction<string | null>>;
}
const LeasesContext = createContext<LeaseContext | undefined>(undefined);

export function LeasesProvider({ children }: { children: React.ReactNode }) {
  const leasesState = useLeases();
  const [createLeaseError, setCreateLeaseError] = useState<string | null>(null);
  return (
    <LeasesContext.Provider
      value={{ leasesState, createLeaseError, setCreateLeaseError }}
    >
      {children}
    </LeasesContext.Provider>
  );
}

export function useLeasesContext() {
  const context = useContext(LeasesContext);
  if (!context) {
    throw new Error("useLeasesContext must be within LeasesProvider");
  }
  return context;
}
