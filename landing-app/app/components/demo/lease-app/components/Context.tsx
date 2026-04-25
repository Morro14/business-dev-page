import {
  useContext,
  createContext,
  useState,
  type SetStateAction,
} from "react";
import type { Customer, Data, Equipment, Lease } from "../types";

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
    // console.log("update", update.constructor.name);
    if (!data) {
      return;
    }
    const updateClass = update.constructor.name;
    switch (updateClass) {
      // case "Equipment":
      //   const eqp = update as Equipment;
      //   const eqpPrevIndex = data?.equipment?.findIndex(
      //     (item) => item.id === eqp.id,
      //   );
      //
      //   if (eqpPrevIndex === -1) {
      //     setData({ ...data, equipment: [...data.equipment, eqp] });
      //     break;
      //   }
      //   const eqpCopy = data?.equipment as Equipment[];
      //   eqpCopy[eqpPrevIndex] = eqp;
      //   setData({
      //     equipment: eqpCopy,
      //     customers: data?.customers,
      //     leases: data?.leases,
      //   });
      //   break;
      case "Lease":
        const lease = update as Lease;
        const leasePrevIndex = data?.leases?.findIndex(
          (item) => item.id === lease.id,
        );

        const eqpCopy = data.equipment;
        const updatedEqp = eqpCopy.find(
          (item) => item.id === lease.equipment?.id,
        ) as Equipment;
        updatedEqp.status = "leased";
        if (leasePrevIndex === -1) {
          setData({
            ...data,
            equipment: eqpCopy,
            leases: [...data.leases, lease],
          });
          break;
        }
        const leasesCopy = data.leases as Lease[];
        leasesCopy[leasePrevIndex] = lease;
        setData({
          equipment: eqpCopy,
          customers: data.customers,
          leases: leasesCopy,
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
