import { useTranslation } from "react-i18next";
import QuickNav from "~/components/QuickNav";

export default function Examples() {
  const { t } = useTranslation();
  return (
    <div className="bg-white text-text-main grow">
      <main className="max-w-7xl mx-auto px-6 pb-24 pt-10 space-y-16">
        <QuickNav
          links={[
            { label: "main", path: "/" },
            { label: "contact", path: "/contact" },
          ]}
        ></QuickNav>
        <div className="space-y-10">
          <h1>{t("Examples")}</h1>

          <div className="flex flex-col gap-8">
            {/* GUESTHOUSE */}
            <section className="space-y-4">
              <h2>{t("1. Guest-house web application")}</h2>

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
              <div className="space-y-8 text-sm italic text-text-lighter">
                <div>
                  <p>{t("Client-side app")}</p>
                  <div className="md:w-150 md:h-84 bg-gray-100"></div>
                </div>
                <div>
                  <p>{t("A screenshot of admin panel")}</p>
                  <div className="md:w-150 md:h-84 bg-gray-100"></div>
                </div>
              </div>
            </section>

            {/* LEASE APP */}
            <section className="space-y-4">
              <h2>{t("2. Equipment lease app")}</h2>

              <p className="text-text-lighter">
                {t(
                  "A mock example of a dashboard for tracking equipment for leasing.",
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
              <div className="space-y-8 text-sm italic text-text-lighter">
                <div>
                  <p>{t("Client-side app")}</p>
                  <div className="md:w-150 md:h-84 bg-gray-100"></div>
                </div>
                <div>
                  <p>{t("A screenshot of admin panel")}</p>
                  <div className="md:w-150 md:h-84 bg-gray-100"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
