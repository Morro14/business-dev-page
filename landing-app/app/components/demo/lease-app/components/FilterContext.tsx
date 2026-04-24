import { useContext, createContext, useState } from "react";
import type { Filters } from "../types";

interface FilterContext {
  filters: Filters;
  setFilters: (updates: Filters) => void;
  resetFilters: () => void;
}
export const FilterContext = createContext<FilterContext | null>(null);
export const filtersDefault: Filters = {
  search: "",
  status: "",
  location: "",
  category: "",
};

export default function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFiltersState] = useState<Filters>(filtersDefault);
  const setFilters = (updates: Filters) => {
    setFiltersState((prev) => ({ ...prev, ...updates }));
  };
  const resetFilters = () => setFiltersState(filtersDefault);
  return (
    <FilterContext
      value={{
        filters,
        setFilters,
        resetFilters,
      }}
    >
      {children}
    </FilterContext>
  );
}

export const useFilterContext = () => {
  return useContext(FilterContext);
};
