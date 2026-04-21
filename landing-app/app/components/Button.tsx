import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Button() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative">
      <Link
        to={`/${i18n.language}/contact`}
        className="relative z-40 text-lg underline"
      >
        {t("Get a free consultation")}
      </Link>
      <div className="absolute -top-1 -left-2 -skew-y-2  bg-accent w-52 h-9 hover:opacity-80 hover:cursor-pointer transition"></div>
    </div>
  );
}
