import { useContext, useState } from "react";
import customers from "../data/customers.json";
import { useTranslation } from "react-i18next";
import { useLeasesContext } from "./LeasesContextProvider";
import { useCustomContext } from "./Context";
import ErrorBlock from "./ErrorBlock";
import type { Customer } from "../types";

const BASE_MEDIA_URL = "/app/components/demo/lease-app/data/media/equipment/";
export function LeaseModal() {
  const leasesContext = useLeasesContext();
  const dataContext = useCustomContext();
  const { isOpen, selectedEquipment, createLease, closeLeaseModal } =
    leasesContext.leasesState;
  const { t } = useTranslation();
  const [customerId, setCustomerId] = useState<number>();
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  if (!isOpen || !selectedEquipment) return null;

  const selectedCustomer = customers.find(
    (c) => c.id === customerId,
  ) as Customer;
  const today = new Date();
  return (
    <div className="modal">
      <div className="bg-white min-w-90 min-h-130 p-8 ">
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
                min={today.toISOString().slice(0, 10)}
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
              {leasesContext?.createLeaseError ? (
                <ErrorBlock
                  errorMsg={leasesContext?.createLeaseError}
                ></ErrorBlock>
              ) : (
                ""
              )}
              <button
                className="text-lg underline bg-accent"
                onClick={() => {
                  if (!selectedCustomer || !startDate || !endDate) {
                    leasesContext.setCreateLeaseError(
                      t("All fields must have values."),
                    );
                    return;
                  }
                  createLease({
                    customer: selectedCustomer,
                    startDate: startDate,
                    endDate: endDate,
                  });
                }}
              >
                {t("Confirm lease")}
              </button>

              <button
                onClick={() => {
                  leasesContext.setCreateLeaseError(null);
                  closeLeaseModal();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
