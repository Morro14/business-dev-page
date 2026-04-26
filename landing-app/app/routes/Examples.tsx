import { useTranslation } from "react-i18next";
import QuickNav from "~/components/QuickNav";
import leaseAppImg from "src/assets/demo-lease-app-img.jpg";
import { Link } from "react-router";

export default function Examples() {
  const { t, i18n } = useTranslation();
  return (
    <div className="space-y-16">
      <QuickNav
        links={[
          { label: t("main"), path: "/" },
          { label: t("contact"), path: "/contact" },
        ]}
      ></QuickNav>
      <div className="space-y-10">
        <h1>{t("Examples")}</h1>

        <div className="space-y-16">
          {/* GUESTHOUSE */}
          <section className="space-y-6">
            <h2 className="mb-6">{t("1. Guest-house web application")}</h2>
            <div className="space-y-4">
              <p className="text-text-lighter">
                {t(
                  "A real-life example of a guest-house website with following features:",
                )}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  {t(
                    "admin panel for managing  booking process (rooms, reservations)",
                  )}
                </li>
                <li>
                  {t(
                    "a manager can upload media files and text content to publish them on the client-side web-page (photo carousel, information texts)",
                  )}
                </li>
                <li>{t("full room reservation flow for users")}</li>

                <li>{t("email notifications for managers and users")}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-sm italic text-text-lighter">
                <p>{t("Client-side app")}</p>
                <div className="md:w-150 md:h-84 bg-gray-100"></div>
              </div>
              <div className="text-sm italic text-text-lighter">
                <p>{t("A screenshot of admin panel")}</p>
                <div className="md:w-150 md:h-84 bg-gray-100"></div>
              </div>
              <Link
                className="mt-2 text-lg underline"
                to={`/${i18n.language}/demo/lease-app`}
              >
                {t("Open example")}
              </Link>
            </div>
          </section>

          {/* LEASE APP */}
          <section className="space-y-6">
            <h2 className="mb-6">{t("2. Equipment lease app")}</h2>
            <div className="space-y-4">
              <p className="text-text-lighter">
                {t(
                  "A mock example of a dashboard for tracking equipment for leasing.",
                )}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  {t("overview of equipment statistics and revenue display")}
                </li>
                <li>{t("filter equipment by multiple parameters")}</li>
                <li>{t("create a lease for selected equipment")}</li>

                <li>{t("list of recent leases")}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm pt-2 italic text-text-lighter">
                  {t("Dashboard")}
                </p>
                <Link to={`/${i18n.language}/demo/lease-app`}>
                  <img
                    className="md:w-150 md:h-84 object-cover border border-text-main"
                    src={leaseAppImg}
                  ></img>
                </Link>
              </div>
              <Link
                className="mt-2 text-lg underline"
                to={`/${i18n.language}/demo/lease-app`}
              >
                {t("Open example")}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
