import type { Equipment, Lease, Maintenance } from "../types";
import { useTranslation } from "react-i18next";
import { useLeasesContext } from "./LeasesContextProvider";
import { useCustomContext } from "./Context";

const BASE_MEDIA_URL = import.meta.env.VITE_MEDIA_BASE_URL;

export default function EqpCard({ eqp }: { eqp: Equipment }) {
  const { t } = useTranslation(["demo-lease-app"]);
  const leasesContext = useLeasesContext();
  const { openLeaseModal } = leasesContext.leasesState;
  const statusColors = {
    available: "bg-[#98FF86]",
    leased: "bg-[#86FFE3]",
    maintenance: "bg-[#FFFB81]",
  };
  const dataCotnext = useCustomContext();
  const lease = dataCotnext?.data?.leases.find(
    (item) => item.equipment.id === eqp.id,
  ) as Lease;
  const mt = dataCotnext?.data?.mts.find(
    (item) => item.equipment.id === eqp.id,
  ) as Maintenance;
  const formatDate = (date: Date) => {
    const fmt = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    });
    return fmt.format(date);
  };
  const eqpStatusString = t(eqp.status);
  return (
    <div className="w-64 min-h-64 border border-gray-500">
      <img
        className="object-cover h-32 w-full"
        src={`${BASE_MEDIA_URL}/demo/${eqp.image}`}
      />
      <div className={`p-2`}>
        <h3>{eqp.name}</h3>
        <p className="text-base">{`${t("Daily rate")}: ${eqp.dailyRate}`}</p>
        <p>
          <span
            className={`text-base px-1 ${statusColors[eqp.status]} text-black`}
          >
            {eqpStatusString}
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
          <p className="mt-2 text-base">
            {t("Until")}: {formatDate(lease.endDate)}
          </p>
        ) : eqp.status === "maintenance" ? (
          <p className="mt-2 text-base">
            {t("Until")}: {formatDate(mt.endDate)}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
