import { useTranslation, Trans } from "react-i18next";
import QuickNav from "~/components/QuickNav";

export default function Roadmap() {
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
        {/* ROADMAP */}
        <div className="space-y-10">
          <h1>{t("Roadmap example")}</h1>
          <p className="italic text-text-lighter">
            {t(
              "A general example of development process. Specifics will vary depending on your project’s goals.",
            )}
          </p>

          <div className="flex flex-col gap-8">
            {/* FRAMING THE PROBLEM */}
            <section className="space-y-4">
              <h2>{t("1. Framing the problem")}</h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li>
                  {t(
                    "Understanding of your current workflow - how the work is done currently.",
                  )}
                </li>
                <li>
                  {t(
                    "Defining goals (e.g. time saved, error reduced, visibility enhanced).",
                  )}
                </li>
                <li>{t("Proposed solutions.")}</li>
              </ol>
            </section>

            {/* SCOPE */}
            <section className="space-y-4">
              <h2>{t("2. Scope")}</h2>
              <p className="text-text-lighter">
                {t("Defining core features. For example:")}
              </p>
              <h3>{t("Internal Dashboard")}</h3>
              <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                <li>{t("Authentication")}</li>
                <li>{t("Data flow (API or DB)")}</li>
                <li>{t("3-5 key metrics")}</li>
                <li>{t("Basic filters")}</li>
                <li>{t("Clean, minimal UI")}</li>
              </ul>
            </section>

            {/* DEVELOPMENT */}
            <section className="space-y-4">
              <h2>{t("3. Development Process and milestones")}</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>{t("Discovery and Planning.")}</li>
                <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                  <li>{t("Finalize requirements")}</li>
                  <li>{t("Map workflows")}</li>
                  <li>{t("Define data structure")}</li>
                </ul>

                <li>{t("Application layout (structural).")}</li>
                <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                  <li>
                    {t("Building a scheme (structural layout, functions)")}
                  </li>
                  <p className="text-text-lighter">
                    <Trans
                      i18nKey={"Outcome: Approved layout before development"}
                    >
                      <b>Outcome:</b> Approved layout before development
                    </Trans>
                  </p>
                </ul>

                <li>{t("Development.")}</li>
                <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                  <li>{t("Iterative implementation")}</li>
                  <li>{t("Regular progress updates")}</li>
                </ul>

                <li>{t("Testing & Refinement.")}</li>
                <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                  <li>{t("Fix issues")}</li>
                  <li>{t("Improve usability")}</li>
                  <li>{t("Validate real-world usage")}</li>
                </ul>

                <li>{t("Deployment stage, testing.")}</li>
                <li>{t("Production-ready.")}</li>
              </ol>
            </section>

            {/* MILESTONES */}
            <section className="space-y-4">
              <h2>{t("Milestones")}</h2>
              <p className="text-text-lighter">
                {t("Example of development milestones:")}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                <li>
                  {t("Milestone 1: Functional prototype (core flow works)")}
                </li>
                <li>{t("Milestone 2: Core system complete")}</li>
                <li>{t("Milestone 3: Automation & Integrations")}</li>
                <li>{t("Milestone 4: Finalized and deployed")}</li>
              </ul>
              <p className="text-text-lighter">{t("Typical timeline:")}</p>

              <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                <li>{t("Simple internal tool: 4–6 weeks")}</li>
                <li>{t("More complex system: 8–12+ weeks")}</li>
              </ul>
            </section>

            {/* COLLABORATION */}
            <section className="space-y-4">
              <h2>{t("Collaboration")}</h2>
              <p className="text-text-lighter">
                {t("What I will need from you:")}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                <li>{t("Timely feedback")}</li>
                <li>{t("Access to necessary tools/data")}</li>
                <li>{t("Clarification of your business rules")}</li>
              </ul>
            </section>

            {/* POST_LAUNCH */}
            <section className="space-y-4">
              <h2>{t("Post-Launch")}</h2>
              <ul className="list-disc pl-6 space-y-1 text-text-lighter">
                <li>{t("Bug fixes (initial period)")}</li>
                <li>{t("Performance improvements")}</li>
                <li>{t("Feature extensions")}</li>
                <li>{t("Ongoing support (optional)")}</li>
              </ul>
            </section>
          </div>
        </div>
        <QuickNav
          links={[
            { label: "main", path: "/" },
            { label: "contact", path: "/contact" },
          ]}
        ></QuickNav>
      </main>
    </div>
  );
}
