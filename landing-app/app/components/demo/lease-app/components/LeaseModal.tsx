import { useContext, useState } from "react";
import customers from "../data/customers.json";
import { useTranslation } from "react-i18next";
import { useLeasesContext } from "./LeasesContextProvider";
import { useCustomContext } from "./Context";

const BASE_MEDIA_URL = "/app/components/demo/lease-app/data/media/equipment/";
export function LeaseModal() {
  const leasesContext = useLeasesContext();
  const dataContext = useCustomContext();
  const { isOpen, selectedEquipment, createLease, closeLeaseModal } =
    leasesContext;
  const { t } = useTranslation();
  const [customerId, setCustomerId] = useState<number>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  if (!isOpen || !selectedEquipment) return null;

  const selectedCustomer = customers.find((c) => c.id === customerId);

  return (
    <div className="modal">
      <div className="bg-white min-w-90 p-8 ">
        <img
          className="object-cover h-32 w-full"
          src={`${BASE_MEDIA_URL + selectedEquipment.image}`}
        />
        <div className="flex flex-col space-y-4">
          <h2 className="mt-4">Lease {selectedEquipment.name}</h2>
          <div className="flex flex-col gap-4">
            <select
              className="text-lg border py-1"
              onChange={(e) => setCustomerId(Number(e.target.value))}
            >
              <option value="">{t("Select customer")}</option>
              {customers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <div className="flex flex-col pl-1">
              <label className="text-sm text-gray-500">
                {t("Start date:")}
              </label>
              <input
                type="date"
                className="text-lg"
                onChange={(e) => setStartDate(new Date(e.target.value))}
              />
            </div>

            <div className="flex flex-col pl-1">
              <label className="text-sm text-gray-500">{t("End date:")}</label>
              <input
                className="text-lg"
                type="date"
                onChange={(e) => setEndDate(new Date(e.target.value))}
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <button
                className="text-lg underline bg-accent"
                onClick={() =>
                  createLease({
                    customer: selectedCustomer,
                    startDate,
                    endDate,
                  })
                }
              >
                {t("Confirm lease")}
              </button>

              <button onClick={closeLeaseModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
