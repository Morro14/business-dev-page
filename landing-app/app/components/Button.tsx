import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Button() {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative px-1 w-fit">
      <Link
        to={`/${i18n.language}/contact`}
        className="relative z-40 underline text-xl"
      >
        {t("Get a free consultation")}
      </Link>
      <div className="absolute -top-1.5 -left-1 -skew-y-2  bg-accent w-[104%] h-10 hover:opacity-80 hover:cursor-pointer transition"></div>
    </div>
  );
}
