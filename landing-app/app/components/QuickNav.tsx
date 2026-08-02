import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface Link {
  label: string;
  path: string;
}

export default function QuickNav({ links }: { links: Link[] }) {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p className="text-base text-text-lighter">{t("back to")}:</p>
      <div className="flex flex-col items-start">
        {links.map((link, i) => (
          <Link
            to={`/${i18n.language}/${link.path}`}
            className="text-xl underline hover:opacity-80"
            key={`quick-navlink-${i}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
