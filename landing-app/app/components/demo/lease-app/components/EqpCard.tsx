import type { Equipment } from "../types";
import eqpImage from "../data/media/equipment/bulldozer.jpg";
import { useTranslation } from "react-i18next";
import { useLeases } from "../hooks/useLeases";
import { LeaseModal } from "./LeaseModal";
import { useLeasesContext } from "./LeasesContextProvider";

const BASE_MEDIA_URL = "/app/components/demo/lease-app/data/media/equipment/";

export default function EqpCard({ eqp }: { eqp: Equipment }) {
  const { t } = useTranslation();
  const leasesContext = useLeasesContext();
  const { openLeaseModal } = leasesContext;
  const statusColors = {
    available: "bg-[#65FF93]",
    leased: "bg-[#CC9FFF]",
    maintenance: "bg-accent",
  };
  return (
    <div className="size-64 border border-gray-500">
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
        {eqp.status === "available" && (
          <button
            className="px-1 mt-2 text-lg underline"
            onClick={() => openLeaseModal(eqp)}
          >
            {t("lease")}
          </button>
        )}
      </div>
    </div>
  );
}
