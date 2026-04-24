import type { Equipment, Filters } from "../types";

const normalize = (str: string) => str.toLowerCase().trim();

const matchesSearch = (itemName: string, search: string) => {
  const s = normalize(search);

  return normalize(itemName).includes(s);
};

export function filterEquipment(eqp: Equipment[], filters: Filters) {
  const defaultValue = "";
  const eval_ = (key: keyof Filters, eqpValue: string, filterValue: string) => {
    if (key === "search") {
      return (
        !matchesSearch(eqpValue, filterValue) && filterValue !== defaultValue
      );
    }
    return eqpValue !== filterValue && filterValue !== defaultValue;
  };
  const eqpData = eqp.map((item) => {
    return { ...item, search: item.name };
  });
  const filteredEqpData = eqpData.filter((item) => {
    const negative = Object.keys(filters).find((key) =>
      eval_(key, item[key], filters[key]),
    );
    return !negative;
  });
  return filteredEqpData;
}
