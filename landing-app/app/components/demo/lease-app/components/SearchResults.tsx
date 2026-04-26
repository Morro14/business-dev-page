import { useTranslation } from "react-i18next";
import { useCustomContext } from "./Context";
import EqpCard from "./EqpCard";
import { useFilterContext } from "./FilterContext";
import { filterEquipment } from "../utils/filters";
import type { Filters } from "../types";
import { LeaseModal } from "./LeaseModal";
import { useLeasesContext } from "./LeasesContextProvider";

export default function SearchResults() {
  const { t } = useTranslation();
  const filterContext = useFilterContext();
  const dataContext = useCustomContext();
  const leasesContext = useLeasesContext();
  const eqp = dataContext?.data?.equipment || [];
  const filterDefault: Filters = {
    search: "",
    category: "",
    status: "",
    location: "",
  };
  const eqpFiltered = filterEquipment(
    eqp,
    filterContext?.filters || filterDefault,
  );
  const { isOpen } = leasesContext.leasesState;
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(254px,max-content))]">
      {eqpFiltered.length === 0 ? (
        <span className="text-lg font-semibold">
          {t("No equipment found with given parameters.")}
        </span>
      ) : (
        eqpFiltered.map((item, i) => (
          <EqpCard key={`eqp-card-${i}`} eqp={item}></EqpCard>
        ))
      )}

      {isOpen ? <LeaseModal></LeaseModal> : ""}
    </div>
  );
}
