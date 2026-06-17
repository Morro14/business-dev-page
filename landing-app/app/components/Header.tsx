import { useTranslation } from "react-i18next";
import LangSelect from "./LanguageSelect";
import { Link, useLocation } from "react-router";
import { indexPathMatch } from "~/utils/general";
import type { Language } from "~/vars";
import { useEffect, useState } from "react";

const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_BASE_URL;

export default function Header() {
  const { t, i18n } = useTranslation();
  const loc = useLocation();
  // const [showModalMenu, setShowModalMenu] = useState(false);

  // const handleClick = () => {
  //   const servicesSection = document.getElementById("section-what-i-build");
  //   servicesSection?.scrollIntoView();
  // };
  const lang = i18n.language as Language;
  const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme || preferedTheme);
  const themeSwitchTo = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const layout = document.getElementById("layout");
    if (!layout) {
      return;
    }
    layout.classList.toggle("dark", theme === "dark");
  }, [theme]);
  console.log("theme", theme);
  return (
    <div className="flex justify-center w-full sm:h-11 h-13 text-text-main text-base px-3 sm:py-0 py-2">
      <div className="max-w-7xl w-full h-full flex sm:items-center items-start justify-between flex-col sm:flex-row">
        <Link
          to={`/${i18n.language}`}
          className="font-mono font-medium md:h-auto h-11 flex items-center"
        >
          i.fomin.dev
        </Link>

        <div className="gap-3 items-center flex static ">
          {indexPathMatch(loc.pathname, lang) ? (
            ""
          ) : (
            <Link
              className="hover:cursor-pointer underline lowercase"
              to={`/${i18n.language}`}
            >
              {t("Main")}
            </Link>
          )}
          <Link
            to={"contact"}
            className="hover:cursor-pointer underline lowercase"
          >
            {t("Contanct")}
          </Link>
          <div className="flex ">
            <div className="">{t("lang")}:</div>
            <LangSelect></LangSelect>
          </div>
          <button
            onClick={() => {
              localStorage.setItem("theme", themeSwitchTo);
              setTheme(themeSwitchTo);
            }}
          >
            <img
              src={`${MEDIA_BASE_URL}/light-theme-icon.webp`}
              className={`sm:size-5 size-4 opacity-80 ${theme === "dark" ? "block" : "hidden"}`}
            />
            <img
              src={`${MEDIA_BASE_URL}/dark-theme-icon.webp`}
              className={`sm:size-5 size-4 opacity-80 ${theme !== "dark" ? "block" : "hidden"}`}
            />
          </button>
        </div>
        {/* <Burger params={{ showModalMenu, setShowModalMenu }}></Burger> */}
      </div>
    </div>
  );
}
