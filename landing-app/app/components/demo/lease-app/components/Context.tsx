import {
  useContext,
  createContext,
  useState,
  type SetStateAction,
} from "react";
import type { Data, Equipment, Lease } from "../types";

interface CustomContext {
  data: Data | undefined;
  setData: React.Dispatch<SetStateAction<Data | undefined>>;
  totalRevenue: number;
  setTotalRevenue: React.Dispatch<SetStateAction<number>>;
  updateData: (update: Equipment | Lease) => void;
  updateRevenue: (update: number) => void;
  // equipment: Equipment[];
  // setEquipment: React.Dispatch<SetStateAction<Equipment[]>>;
}
export const Context = createContext<CustomContext | null>(null);

export default function ContextProvider({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { dataInit: Data };
}) {
  const [data, setData] = useState<undefined | Data>(params.dataInit);
  const revenueBase = 14750;
  const [totalRevenue, setTotalRevenue] = useState(revenueBase);
  // const [equipment, setEquipment] = useState<Equipment[]>(
  //   params.dataInit.equipment,
  // );
  const updateData = (update: Equipment | Lease) => {
    if (!data) {
      return;
    }
    const updateClass = update.constructor.name;
    switch (updateClass) {
      case "Lease":
        const lease = update as Lease;
        const leasePrevIndex = data?.leases?.findIndex(
          (item) => item.id === lease.id,
        );

        const eqp = data.equipment;
        const updatedEqp = eqp.find((item) => item.id === lease.equipment?.id);
        if (updatedEqp) {
          updatedEqp.status = "leased";
        }
        let leases = data.leases;
        if (leasePrevIndex === -1) {
          leases = [...data.leases, lease];
        }
        leases[leasePrevIndex] = lease;
        console.log("new leases", leases);
        setData({
          ...data,
          leases: leases,
        });
        break;
    }
  };
  const updateRevenue = (update: number) => {
    setTotalRevenue(totalRevenue + update);
  };
  return (
    <Context
      value={{
        data,
        setData,
        totalRevenue,
        setTotalRevenue,
        updateData,
        updateRevenue,
        // equipment,
        // setEquipment,
      }}
    >
      {children}
    </Context>
  );
}

export const useCustomContext = () => {
  return useContext(Context);
};
