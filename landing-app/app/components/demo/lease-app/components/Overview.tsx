import { useTranslation } from "react-i18next";
import KPIBlock from "./KPIBlock";
import { useCustomContext } from "./Context";

export default function Overview() {
  const { t } = useTranslation();
  const context = useCustomContext();
  const equipmentCount = context?.data?.equipment.length || undefined;
  const availableCount = context?.data?.equipment.filter(
    (item) => item.status === "available",
  ).length;
  const leasedCount = context?.data?.equipment.filter(
    (item) => item.status === "leased",
  ).length;
  const mtCount = context?.data?.equipment.filter(
    (item) => item.status === "leased",
  ).length;
  return (
    <div className="space-y-4">
      <h2>{t("Overview")}</h2>
      <div className="flex gap-9">
        <KPIBlock name={t("Total")} value={equipmentCount}></KPIBlock>
        <KPIBlock name={t("Available")} value={availableCount}></KPIBlock>
        <KPIBlock name={t("Leased")} value={leasedCount}></KPIBlock>
        <KPIBlock name={t("Maintenance")} value={mtCount}></KPIBlock>
      </div>
      <div className="space-x-8 pt-2 text-xl font-medium">
        <span className="">{t("Revenue")}:</span>
        <span>{`$${context?.totalRevenue}`}</span>
      </div>
    </div>
  );
}
