import type { Equipment, EquipmentCategory, EquiupmentStatus } from "../types";

export function getEqpCategories(eqp: Equipment[]) {
  const cats: EquipmentCategory[] = [];
  eqp.forEach((item) => {
    if (item) {
      cats.push(item.category);
    }
  });
  const catsSet = new Set(cats);
  return Array.from(catsSet);
}

export function getEqpStatuses(eqp: Equipment[]) {
  const statuses: EquiupmentStatus[] = [];
  eqp.forEach((item) => {
    if (item) {
      statuses.push(item.status);
    }
  });
  const statusesSet = new Set(statuses);
  return Array.from(statusesSet);
}

export function getEqpLocations(eqp: Equipment[]) {
  const locs: string[] = [];
  eqp.forEach((item) => {
    if (item) {
      locs.push(item.location);
    }
  });
  const locsSet = new Set(locs);
  return Array.from(locsSet);
}
