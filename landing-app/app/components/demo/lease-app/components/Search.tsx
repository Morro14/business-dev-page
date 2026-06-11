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
import { useRef } from "react";

export default function Search() {
  const { t } = useTranslation(["demo-lease-app"]);
  const dataContext = useCustomContext();
  const filterContext = useFilterContext();
  const eqp = dataContext?.data?.equipment || [];
  const eqpCats = getEqpCategories(eqp);
  const eqpStatuses = getEqpStatuses(eqp);
  const eqpLocs = getEqpLocations(eqp);
  const handleFormChange = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formDataObj = Object.fromEntries(formData) as unknown as Filters;
    filterContext?.setFilters(formDataObj);
    console.dir(formDataObj);
  };
  const handleFieldReset = (elementId: string) => {
    console.log("resetting filters");
    const inputEl = document.getElementById(elementId) as HTMLInputElement;
    const formEl = formRef.current as HTMLFormElement;
    inputEl.value = "";
    console.log("defaultValue", inputEl.defaultValue);
    const formData = new FormData(formEl);
    const formDataObj = Object.fromEntries(formData) as unknown as Filters;
    console.log(formDataObj);
    filterContext?.setFilters(formDataObj);
  };
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className="space-y-4">
      <h2>{t("Search equipment")}</h2>
      <Form
        method="get"
        className="flex md:space-x-8 max-md:space-y-4 pt-2 text-xl font-medium md:w-auto w-full "
        onChange={handleFormChange}
        onSubmit={(e) => e.preventDefault()}
        ref={formRef}
      >
        <div className="flex items-center gap-1">
          <input
            name="search"
            id="search-eqp"
            list="eqp-names"
            className="border border-gray-500 px-1 h-8 text-base placeholder:text-text-placeholder focus:placeholder:text-gray-300 md:w-auto w-full"
            placeholder={t("Search equipment...")}
          ></input>
          <datalist id="eqp-names">
            {eqp.map((item, i) => {
              return <option key={`eqp-name-${i}`} value={item.name}></option>;
            })}
          </datalist>
          <button onClick={() => handleFieldReset("search-eqp")}>×</button>
        </div>
        <div className="flex items-center gap-1">
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
                  {t(item)}
                </option>
              );
            })}
          </select>
          <button onClick={() => handleFieldReset("category-eqp")}>×</button>
        </div>
        <div className="flex items-center gap-1">
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
                  {t(item)}
                </option>
              );
            })}
          </select>
          <button onClick={() => handleFieldReset("status-eqp")}>×</button>
        </div>
        <div className="flex items-center gap-1">
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
          <button onClick={() => handleFieldReset("location-eqp")}>×</button>
        </div>
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
