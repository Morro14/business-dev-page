import type { EquipmentData, CustomerData } from "./types";
import { Lease, Customer, Equipment, Maintenance } from "./types";
import eqData from "./data/equipment.json";
import leaseData from "./data/leases.json";
import customersData from "./data/customers.json";
import mtsData from "./data/maintenance.json";

const typedData = {
  eqData: eqData as EquipmentData[],
  customersData: customersData as CustomerData[],
};

export function genData() {
  const equipment: Equipment[] = [];
  const leases: Lease[] = [];
  const customers: Customer[] = [];
  const mts: Maintenance[] = [];
  typedData.eqData.forEach((item) => {
    const serializedItem: Equipment = new Equipment(item);
    equipment.push(serializedItem);
  });
  typedData.customersData.forEach((item) => {
    const serializedItem: CustomerData = new Customer(item);
    customers.push(serializedItem);
  });
  leaseData.forEach((item) => {
    const serializedItem = new Lease(item, equipment, customers);
    leases.push(serializedItem);
  });
  mtsData.forEach((item) => {
    const serializedItem: Maintenance = new Maintenance(item, equipment);
    mts.push(serializedItem);
  });
  return { equipment, leases, customers, mts };
}
