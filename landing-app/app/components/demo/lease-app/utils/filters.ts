import type { Equipment, Filters } from "../types";
const normalize = (str: string) => str.toLowerCase().trim();

const matchesSearch = (itemName: string, search: string) => {
  const s = normalize(search);

  return normalize(itemName).includes(s);
};
export function filterEquipment(eqp: Equipment[], filters: Filters) {
  const defaultValue = "";
  const eval_ = (key: keyof Filters, eqpValue: string, filterValue: string) => {
    if (filterValue === defaultValue) {
      return true;
    }
    if (key === "search") {
      return matchesSearch(eqpValue, filterValue);
    }
    return eqpValue === filterValue;
  };
  const eqpData = eqp.map((item) => {
    return { ...item, search: item.name };
  });
  const filteredEqpData = eqpData.filter((item: Equipment) => {
    const saticfy = Object.entries(filters).every((entry) => {
      return eval_(entry[0], item[entry[0]], entry[1]);
    });
    return saticfy;
  });
  return filteredEqpData;
}
