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
      <p className="text-base text-gray-600">{t("back to")}:</p>
      <div className="flex flex-col">
        {links.map((link) => (
          <Link
            to={`/${i18n.language}/${link.path}`}
            className="text-xl underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
