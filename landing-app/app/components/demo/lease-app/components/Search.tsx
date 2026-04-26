import { useTranslation } from "react-i18next";
import { useCustomContext } from "./Context";
import { Form } from "react-router";
import {
  getEqpCategories,
  getEqpLocations,
  getEqpStatuses,
} from "../utils/getData";
import { useFilterContext } from "./FilterContext";
import type { Filters } from "../types";
import { useRef, type RefObject } from "react";

export default function Search() {
  const { t } = useTranslation();
  const dataContext = useCustomContext();
  const filterContext = useFilterContext();
  const eqp = dataContext?.data?.equipment || [];
  const eqpCats = getEqpCategories(eqp);
  const eqpStatuses = getEqpStatuses(eqp);
  const eqpLocs = getEqpLocations(eqp);
  const handleFormChange = (e) => {
    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData) as unknown as Filters;
    filterContext?.setFilters(formDataObj);
  };
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="space-y-4">
      <h2>{t("Search equipment")}</h2>
      <Form
        method="get"
        className="md:space-x-8 space-y-4 pt-2 text-xl font-medium md:w-auto w-full "
        onChange={handleFormChange}
        onSubmit={(e) => e.preventDefault()}
        ref={formRef}
      >
        <input
          name="search"
          id="search-eqp"
          list="eqp-names"
          className="border border-gray-500 px-1 h-8 text-base placeholder:text-gray-600 focus:placeholder:text-gray-300 md:w-auto w-full"
          placeholder={t("Search equipment...")}
        ></input>
        <datalist id="eqp-names">
          {eqp.map((item, i) => {
            return <option key={`eqp-name-${i}`} value={item.name}></option>;
          })}
        </datalist>
        <select
          name="category"
          id="category-eqp"
          className="border border-gray-500 p-1 text-base h-8 md:w-auto w-full"
        >
          <option value="" className="text-gray-600">
            {t("Category...")}
          </option>
          {eqpCats.map((item, i) => {
            return (
              <option value={item} key={`category-eqp-${i}`}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          name="status"
          id="status-eqp"
          className="border border-gray-500 p-1 text-base h-8 md:w-auto w-full"
        >
          <option value="" className="text-gray-600">
            {t("Status...")}
          </option>
          {eqpStatuses.map((item, i) => {
            return (
              <option value={item} key={`status-eqp-${i}`}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          name="location"
          id="location-eqp"
          className="border border-gray-500 p-1 text-base h-8 md:w-auto w-full"
        >
          <option value="" className="text-gray-600">
            {t("Location...")}
          </option>
          {eqpLocs.map((item, i) => {
            return (
              <option value={item} key={`location-eqp-${i}`}>
                {item}
              </option>
            );
          })}
        </select>
        <button
          id="reset-form"
          className="text-base underline"
          onClick={() => {
            filterContext?.resetFilters();
            if (formRef) {
              formRef.current?.reset();
            }
          }}
        >
          {t("reset filter")}
        </button>
      </Form>
    </div>
  );
}
