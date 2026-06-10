import { useTranslation } from "react-i18next";
import { useCustomContext } from "./Context";

export default function RecentMt() {
  const { t } = useTranslation(["demo-lease-app"]);
  const dataContext = useCustomContext();
  const mts = dataContext?.data?.mts;
  const formatDate = (startDate: Date, endDate: Date) => {
    const fmt = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    });
    return fmt.formatRange(startDate, endDate);
  };
  return (
    <div className="space-y-4 w-full">
      <h2>{t("Recent maintenance", { ns: "demo-lease-app" })}</h2>
      <p className="md:hidden">{t("scroll >")}</p>
      <div className="w-full overflow-x-scroll">
        <table className="min-w-180">
          <thead>
            <tr className="text-left">
              <th>{t("Equipment")}</th>
              <th>{t("Dates")}</th>
              <th>{t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            {!mts
              ? ""
              : mts.map((item, i) => {
                  return (
                    <tr key={`mts-table-row-${i}`}>
                      <td className="md:pr-8">{item.equipment?.name}</td>
                      <td className="md:pr-8">
                        {formatDate(item.startDate, item.endDate)}
                      </td>
                      <td className="md:pr-8">{item.status}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
