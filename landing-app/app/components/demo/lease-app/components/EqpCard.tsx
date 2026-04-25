import type { Equipment, Lease } from "../types";
import { useTranslation } from "react-i18next";
import { useLeasesContext } from "./LeasesContextProvider";
import { useCustomContext } from "./Context";

const BASE_MEDIA_URL = "/app/components/demo/lease-app/data/media/equipment/";

export default function EqpCard({ eqp }: { eqp: Equipment }) {
  const { t } = useTranslation();
  const leasesContext = useLeasesContext();
  const { openLeaseModal } = leasesContext.leasesState;
  const statusColors = {
    available: "bg-[#65FF93]",
    leased: "bg-[#CC9FFF]",
    maintenance: "bg-accent",
  };
  const dataCotnext = useCustomContext();
  const lease = dataCotnext?.data?.leases.find(
    (item) => item.equipment.id === eqp.id,
  ) as Lease;
  const formatDate = (date: Date) => {
    const fmt = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    });
    return fmt.format(date);
  };
  return (
    <div className="w-64 min-h-64 border border-gray-500">
      <img
        className="object-cover h-32 w-full"
        src={`${BASE_MEDIA_URL + eqp.image}`}
      />
      <div className={`p-2`}>
        <h3>{eqp.name}</h3>
        <p>{`${t("Daily rate")}: ${eqp.dailyRate}`}</p>
        <p>
          <span className={`capitalize px-1 ${statusColors[eqp.status]}`}>
            {`${eqp.status} `}
            {/* <span className={`${statusColors[eqp.status]}`}>■</span> */}
          </span>
        </p>
        {eqp.status === "available" ? (
          <button
            className="px-1 mt-2 text-lg underline"
            onClick={() => openLeaseModal(eqp)}
          >
            {t("lease")}
          </button>
        ) : eqp.status === "leased" ? (
          <p className="mt-2">
            {t("Until")}: {formatDate(lease.endDate)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
