import { useTranslation } from "react-i18next";

const email = import.meta.env.VITE_EMAIL;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div
      id="footer"
      className="w-full text-lg border-t border-text-main h-36 mt-24"
    >
      <div className="mx-auto container-main p-6">
        <p>{email}</p>
        <p className="text-base text-text-lighter">
          {t("Developer specializing in custom business applications")}
        </p>
      </div>
    </div>
  );
}
