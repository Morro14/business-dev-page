import eqData from "./data/equipment.json";
import customersData from "./data/customers.json";

export type EquipmentCategory =
  | "Heavy Machinery"
  | "Construction"
  | "Lifting"
  | "Warehouse"
  | "Lifting"
  | "Power";
export type EquiupmentStatus = "available" | "leased" | "maintenance";
type LeaseStatus = "active" | "completed";

export interface EquipmentData {
  id: number;
  name: string;
  category: EquipmentCategory;
  status: EquiupmentStatus;
  location: string;
  image: string;
  daily_rate: number;
}

export interface LeaseData {
  id: number;
  equipment_name: string;
  equipment_id: number;
  customer_id: number;
  customer_name: string;
  start_date: string;
  end_date: string;
  status: string;
  total_price: number;
}
export interface CustomerData {
  id: number;
  name: string;
  contact: string;
}

const typedData = {
  eqData: eqData as EquipmentData[],
  customersData: customersData as CustomerData[],
};

export class Lease {
  id: number;
  equipment: Equipment;
  customer: Customer;
  startDate: Date;
  endDate: Date;
  status: LeaseStatus | string;
  totalPrice: number;

  constructor(data: LeaseData, equipment: Equipment[], customers: Customer[]) {
    this.id = data.id;
    this.equipment = equipment.find(
      (item) => item.id === data.equipment_id,
    ) as Equipment;
    this.customer = customers.find(
      (item) => item.id === data.customer_id,
    ) as Customer;
    this.startDate = new Date(data.start_date);
    this.endDate = new Date(data.end_date);
    this.status = data.status;
    this.totalPrice = data.total_price;
  }
}
export class Equipment {
  id: number;
  name: string;
  category: EquipmentCategory;
  status: EquiupmentStatus;
  location: string;
  image: string;
  dailyRate: number;
  constructor(data: EquipmentData) {
    this.id = data.id;
    this.name = data.name;
    this.category = data.category;
    this.status = data.status;
    this.location = data.location;
    this.image = data.image;
    this.dailyRate = data.daily_rate;
  }
}
export class Customer {
  id: number;
  name: string;
  contact: string;
  constructor(data: CustomerData) {
    this.id = data.id;
    this.name = data.name;
    this.contact = data.contact;
  }
}

export type Data = {
  customers: Customer[];
  equipment: Equipment[];
  leases: Lease[];
};

export interface Filters {
  search: string;
  category: EquipmentCategory | "";
  status: EquiupmentStatus | "";
  location: string;
}
