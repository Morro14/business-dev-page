import { useTranslation } from "react-i18next";
import { useCustomContext } from "./Context";

export default function RecentLeases() {
  const { t } = useTranslation();
  const dataContext = useCustomContext();
  const leases = dataContext?.data?.leases;
  const formatDate = (startDate: Date, endDate: Date) => {
    const fmt = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    });
    return fmt.formatRange(startDate, endDate);
  };
  return (
    <div className="space-y-4 w-full">
      <h2>{t("Recent leases")}</h2>
      <p className="md:hidden">{t("scroll >")}</p>
      <div className="w-full overflow-x-scroll">
        <table className="min-w-180">
          <thead>
            <tr className="text-left">
              <th>{t("Equipment")}</th>
              <th>{t("Customer")}</th>
              <th>{t("Dates")}</th>
              <th>{t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            {!leases
              ? ""
              : leases.map((item, i) => {
                  return (
                    <tr key={`leases-table-row-${i}`}>
                      <td className="md:pr-8">{item.equipment?.name}</td>
                      <td className="md:pr-8">{item.customer?.name}</td>
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
