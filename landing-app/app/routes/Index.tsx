import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="bg-white text-text-main">
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* HERO */}
        <section className="space-y-10">
          <h1 className="text-4xl font-semibold">
            {t("Custom web applications for growing businesses")}
          </h1>

          <h2 className="text-2xl font-medium">
            {t(
              "Internal tools for your team and client-facing platforms for your customers — built to match your workflow.",
            )}
          </h2>

          <ul className="space-y-1 text-xl font-medium">
            <li>{t("Replace spreadsheets and manual processes")}</li>
            <li>{t("Get a system tailored to your business")}</li>
            <li>{t("Launch in weeks, not months")}</li>
          </ul>

          <div className="flex items-center gap-[17px]">
            <button className="bg-accent text-lg underline px-1 py-1 hover:opacity-80 hover:cursor-pointer transition">
              {t("Get a free consultation")}
            </button>
            <div className="w-0.5 h-8 ml-1 bg-gray-700"></div>
            <button className="text-lg underline px-1 py-1 hover:opacity-80 hover:cursor-pointer transition">
              {t("See examples")}
            </button>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {t(
              "Why do you want to consider having a custom application for your business?",
            )}
          </h2>

          <p className="text-gray-700">
            {t(
              "If your work processes rely on spreadsheets, emails and other tools, there is likely an opportunity to optimize the processes by building custom software. So, what aspects can be improved by having a tool built specifically for your needs?",
            )}
          </p>

          <ol className="list-decimal pl-5 text-gray-700 space-y-4">
            <li className="space-y-4">
              <h4 className="text-lg font-medium">
                {t("Spreadsheets and dealing with defined entities.")}
              </h4>
              <p>
                {t(
                  "Let’s say you have to manage data that has defined properties, e.g. product, scheduled maintenance or anything that is usually managed with spreadsheets. While you can make records, sort and perform various operations in spreadsheets, using proper software (relational databases) allows you to do the following:",
                )}
              </p>
              <ul className="pl-5 list-disc space-y-4">
                <li>
                  {t(
                    "Eliminate a possibility of incorrect data formats. This alone can prevent time lose and error risk when dealing with dates varying in format or locale, values that can be written numerically or with letters, or values that need to have certain limitations.",
                  )}
                </li>
                <li>
                  {t(
                    "Use relations between entities. Relational database allows you to easily manage complex data with multiple interdependent entities. For instance, a product and manufacturer become linked with each other. Now you can design complex inquires - e.g. get a list of products of a specific category with manufacturer of a certain country. Just in one click. The depth and complexity of these operations are only defined by your goals.",
                  )}
                </li>
              </ul>
            </li>
            <li className="space-y-4">
              <h4 className="text-lg font-medium">{t("Repetitive tasks.")}</h4>
              <p>
                {t(
                  "In case your business relies on repetitive tasks, such as sending email notifications, regularly adding or changing existing data or gathering data for analytics, automation of those processes undoubtedly will make those operations much faster, easier and instantly reactive to the related event. For that purposes, the following functionality can be used:",
                )}
              </p>
              <ul className="pl-5 list-disc space-y-4">
                <li>
                  {t(
                    "Automated or scheduled email notifications for your staff and clients. The data in notifications is always consistent with your actual database. The logic of notifications is custom and tailored to your needs.",
                  )}
                </li>
                <li>
                  {t(
                    "Bulk operations on your data. Automate time consuming processes that require manual approach otherwise.",
                  )}
                </li>
              </ul>
            </li>
            <li className="space-y-4">
              <h4 className="text-lg font-medium">
                {t("Providing a better experience for your clients")}
              </h4>
              <p>
                {t(
                  "Build an application for your customers that clearly presents your business and provides client-side tools.",
                )}
              </p>
              <ul className="pl-5 list-disc space-y-4">
                <li>
                  {t("Submitting forms (e.g. appointment, booking, orders).")}
                </li>
                <li>{t("Real-time information access.")}</li>
                <li>{t("Client accounts")}</li>
              </ul>
            </li>
            <li className="space-y-4">
              <h4 className="text-lg font-medium">
                {t("Managing permissions for your staff.")}
              </h4>
              <p>
                {t(
                  "As your business grows, different team members need different levels of access.",
                )}
              </p>
              <ul className="pl-5 list-disc space-y-4">
                <li>{t("Define roles and permissions")}</li>
                <li>{t("Control who can view or edit data")}</li>
                <li>{t("Ensure sensitive information is protected")}</li>
              </ul>
            </li>
            <li className="space-y-4">
              <h4 className="text-lg font-medium">
                {t("Statistics, reports and logging.")}
              </h4>
              <p>
                {t(
                  "Overview your business operations. With the right tools you can:",
                )}
              </p>
              <ul className="pl-5 list-disc space-y-4">
                <li>{t("Track key metrics in a dashboard")}</li>
                <li>{t("Generate reports instantly")}</li>
                <li>{t("Keep logs of important actions")}</li>
              </ul>
            </li>
          </ol>
        </section>
        {/* SOLUTION */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What I build</h2>

          <p className="text-gray-700">
            {t(
              "I design and develop web applications tailored to your business processes—so your tools support how you work.",
            )}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">{t("Internal tools")}</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>{t("dashboards and admin panels")}</li>
                <li>{t("workflow automation")}</li>
                <li>{t("reporting and analytics")}</li>
                <li>{t("role-based access")}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">{t("Client applications")}</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>{t("customer portals")}</li>
                <li>{t("booking or request systems")}</li>
                <li>{t("order/status tracking")}</li>
                <li>{t("simple SaaS products")}</li>
              </ul>
            </div>
          </div>
        </section>
        {/* SERVICES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{t("Services")}</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium">Operations Dashboard</h3>
              <p className="text-gray-700">{t("2–4 weeks · from €2,000")}</p>
            </div>

            <div>
              <h3 className="font-medium">Workflow Automation System</h3>
              <p className="text-gray-700">{t("4–6 weeks · from €5,000")}</p>
            </div>

            <div>
              <h3 className="font-medium">Client Portal</h3>
              <p className="text-gray-700">{t("3–5 weeks · from €4,000")}</p>
            </div>

            <div>
              <h3 className="font-medium">{t("MVP Development")}</h3>
              <p className="text-gray-700">{t("3–6 weeks · from €5,000")}</p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{t("Process")}</h2>

          <p className="text-gray-700">
            {t("How the process of building your application looks like:")}
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium">{t("1. Discovery")}</h3>
              <p className="text-gray-700">
                {t("We define your workflow, requirements, and scope.")}
              </p>
            </div>

            <div>
              <h3 className="font-medium">{t("1. Planning")}</h3>
              <p className="text-gray-700">
                {t("Clear structure, features, and timeline.")}
              </p>
            </div>

            <div>
              <h3 className="font-medium">{t("1. Development")}</h3>
              <p className="text-gray-700">
                {t("Iterative progress with regular updates.")}
              </p>
            </div>

            <div>
              <h3 className="font-medium">{t("1. Delivery")}</h3>
              <p className="text-gray-700">{t("Deployed and ready to use.")}</p>
            </div>

            <div>
              <h3 className="font-medium">{t("1. Support (optional)")}</h3>
              <p className="text-gray-700">
                {t("Ongoing improvements and maintenance.")}
              </p>
            </div>
          </div>
        </section>

        {/* TYPICAL USES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{t("Typical uses")}</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>{t("logistics dashboards and tracking systems")}</li>
            <li>{t("internal tools replacing Excel workflows")}</li>
            <li>{t("admin panels for managing operations")}</li>
            <li>{t("customer portals for services")}</li>
            <li>{t("MVPs for startups")}</li>
          </ul>
        </section>

        {/* WHY WORK WITH ME */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{t("Why work with me")}</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>{t("direct communication (no middle layers)")}</li>
            <li>{t("fast development cycles")}</li>
            <li>
              {t(
                "choose the right tools for the scope of the project, minimize maintenance costs",
              )}
            </li>
            <li>{t("customer portals for services")}</li>
            <li>{t("built with proven technologies (Django + React)")}</li>
          </ul>
        </section>

        {/* TRANSPARENT PRICING */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            {t("Transparent and predictable pricing")}
          </h2>
          <p className="text-gray-700">
            {t("Projects are priced based on scope and complexity.")}
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>{t("fixed pricing for clearly defined projects")}</li>
            <li>{t("milestone-based payments")}</li>
            <li>{t("no hidden costs")}</li>
          </ul>
        </section>

        {/* START BUILDING */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            {t("Start building your app")}
          </h2>
          <p className="text-gray-700">
            {t(
              "Tell me about your workflow and I’ll suggest the best approach.",
            )}
          </p>

          <button className="bg-accent text-lg underline px-1 py-1 hover:opacity-80 hover:cursor-pointer transition">
            {t("Get a free consultation")}
          </button>
        </section>
      </main>
    </div>
  );
}
