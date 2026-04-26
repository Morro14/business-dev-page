import { useTranslation } from "react-i18next";
import LangSelect from "./LanguageSelect";
import { Link, useLocation } from "react-router";
import { indexPathMatch } from "~/utils/general";
import type { Language } from "~/vars";
import Burger from "./Burger";
import { useState } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const loc = useLocation();
  const [showModalMenu, setShowModalMenu] = useState(false);

  const handleClick = () => {
    const servicesSection = document.getElementById("section-what-i-build");
    servicesSection?.scrollIntoView();
  };
  const lang = i18n.language as Language;
  return (
    <div className="w-full md:h-11 h-auto text-text-main text-base md:px-6 px-3">
      <div className="container-main mx-auto h-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <Link
          to={`/${i18n.language}`}
          className="font-mono md:h-auto h-11 flex items-center"
        >
          i.fomin.dev
        </Link>

        <div className="md:gap-6 md:items-center flex flex-col md:flex-row md:static ">
          {indexPathMatch(loc.pathname, lang) ? (
            ""
          ) : (
            <Link className="underline" to={`/${i18n.language}`}>
              {t("Main")}
            </Link>
          )}
          <Link to={"contact"} className="hover:cursor-pointer underline">
            {t("Contanct")}
          </Link>
          <div className="flex ">
            <div className="">{t("lang")}:</div>
            <LangSelect></LangSelect>
          </div>
        </div>
        {/* <Burger params={{ showModalMenu, setShowModalMenu }}></Burger> */}
      </div>
    </div>
  );
}
