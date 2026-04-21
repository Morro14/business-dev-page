import { useTranslation } from "react-i18next";
import LangSelect from "./LanguageSelect";
import { Link, useLocation } from "react-router";
import { indexPathMatch } from "~/utils/general";
import type { Language } from "~/vars";

export default function Header() {
  const { t, i18n } = useTranslation();
  const loc = useLocation();

  const handleClick = () => {
    const servicesSection = document.getElementById("section-what-i-build");
    servicesSection?.scrollIntoView();
  };
  const lang = i18n.language as Language;
  return (
    <div className=" w-full h-11 text-text-main">
      <div className="container-main mx-auto h-full flex items-center justify-between px-6">
        <Link to={`/${i18n.language}`} className="font-mono">
          i.fomin-dev
        </Link>
        <div className="flex gap-6 items-center">
          {indexPathMatch(loc.pathname, lang) ? (
            <button className="hover:cursor-pointer" onClick={handleClick}>
              {t("Services")}
            </button>
          ) : (
            <Link to={`/${i18n.language}`}>{t("Main")}</Link>
          )}
          <Link to={"contact"} className="hover:cursor-pointer">
            {t("Contanct")}
          </Link>
          <div className="flex">
            <div>{t("lang")}:</div>
            <LangSelect></LangSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
