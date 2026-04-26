import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import QuickNav from "~/components/QuickNav";

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className="space-y-16">
      <QuickNav links={[{ label: t("main"), path: "/" }]}></QuickNav>
      <h1>{t("Let's start building your app")}</h1>
      <div className="space-y-8">
        <div className="space-y-0">
          <p className="text-base text-gray-600">{t("Contact via")}:</p>
          <h2>{import.meta.env.VITE_EMAIL}</h2>
        </div>
        <p>
          {t(
            "Tell me about your business and what kind of tools you want to create for it, so we can start working on the project roadmap.",
          )}
        </p>
        <Link className="text-xl underline" to={`/${i18n.language}/roadmap`}>
          {t("See development roadmap example")}
        </Link>
      </div>
    </div>
  );
}
