import type { EquipmentData, CustomerData, LeaseData } from "./types";
import { Lease, Customer, Equipment } from "./types";
import eqData from "./data/equipment.json";
import leaseData from "./data/leases.json";
import customersData from "./data/customers.json";

const typedData = {
  eqData: eqData as EquipmentData[],
  customersData: customersData as CustomerData[],
};

export function genData() {
  const equipment: Equipment[] = [];
  const leases: Lease[] = [];
  const customers: Customer[] = [];
  typedData.eqData.forEach((item) => {
    const serializedItem: Equipment = new Equipment(item);
    equipment.push(serializedItem);
  });
  typedData.customersData.forEach((item) => {
    const serializedItem: CustomerData = new Customer(item);
    customers.push(serializedItem);
  });
  leaseData.forEach((item) => {
    const serializedItem = new Lease(item);
    leases.push(serializedItem);
  });
  console.log(equipment, leases, customers);
}
