import { useTranslation } from "react-i18next";
import { useCustomContext } from "./Context";
import { useEffect, useState } from "react";

export default function RecentLeases() {
  const { t } = useTranslation(["demo-lease-app"]);
  const dataContext = useCustomContext();
  const leases = dataContext?.data?.leases;
  const formatDate = (startDate: Date, endDate: Date) => {
    const fmt = new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    });
    return fmt.formatRange(startDate, endDate);
  };
  const [blur, setBlur] = useState({ left: false, right: true });
  useEffect(() => {
    const containerTable = document.getElementById("container-table-leases");
    const table = document.getElementById("table-leases");
    if (!containerTable || !table) return;
    let blur_ = { left: false, right: true };
    containerTable.addEventListener("scroll", () => {
      if (containerTable.scrollLeft > 4) {
        blur_.left = true;
      } else {
        blur_.left = false;
      }
      if (
        containerTable.scrollWidth - containerTable.clientWidth >
        containerTable.scrollLeft + 4
      ) {
        blur_.right = true;
      } else {
        blur_.right = false;
      }
      setBlur(blur_);
    });
  }, [blur, setBlur]);
  return (
    <div className="relative space-y-4 w-full">
      <h3 className="text-2xl!">{t("Recent leases")}</h3>
      <div className="relative flex" id="container-table-leases-outer">
        {/* <div */}
        {/*   className={`absolute w-8 bg-white right-0 top-0 `} */}
        {/*   id="scroll-overflow-blur-leases" */}
        {/* ></div> */}
        <div
          id="container-table-leases"
          className={`overflow-auto scrollbar-thin ${blur.left ? "mask-l-from-98% mask-l-to-100%" : ""} ${blur.right ? "mask-r-from-98% mask-r-to-100%" : ""}`}
        >
          <table
            className="min-w-180 border border-gray-400 border-collapse"
            id="table-leases"
          >
            <thead>
              <tr className="text-left">
                <th className="bg-bg-lighter px-2 py-1 border border-gray-400">
                  {t("Equipment")}
                </th>
                <th className="bg-bg-lighter px-2 border border-gray-400">
                  {t("Customer")}
                </th>
                <th className="bg-bg-lighter px-2 border border-gray-400">
                  {t("Dates")}
                </th>
                <th className="bg-bg-lighter px-2 border border-gray-400">
                  {t("Status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {!leases
                ? ""
                : leases.map((item, i) => {
                    return (
                      <tr
                        key={`leases-table-row-${i}`}
                        className="text-text-lighter"
                      >
                        <td className="px-2 py-1 border border-gray-400">
                          {item.equipment?.name}
                        </td>
                        <td className="px-2 border border-gray-400">
                          {item.customer?.name}
                        </td>
                        <td className="px-2 border border-gray-400">
                          {formatDate(item.startDate, item.endDate)}
                        </td>
                        <td className="px-2 border border-gray-400">
                          {t(item.status)}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
