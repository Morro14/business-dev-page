import { genData } from "~/components/demo/lease-app/init";
import Overview from "~/components/demo/lease-app/components/Overview";
import ContextProvider from "~/components/demo/lease-app/components/Context";
import { Trans, useTranslation } from "react-i18next";
import Search from "~/components/demo/lease-app/components/Search";
import FilterContextProvider from "~/components/demo/lease-app/components/FilterContext";
import SearchResults from "~/components/demo/lease-app/components/SearchResults";
import { LeasesProvider } from "~/components/demo/lease-app/components/LeasesContextProvider";
import RecentLeases from "~/components/demo/lease-app/components/RecentLeases";
import RecentMt from "~/components/demo/lease-app/components/RecentMt";

export default function Main() {
  const data = genData();
  const { t } = useTranslation();
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <h1>{t("Demo dashboard for equipment leasing service")}</h1>
        <p className="text-text-lighter">
          <Trans id="demo-lease-app-subheader" ns="demo-lease-app">
            This this an example of a mock app — many more features can be added
            that suites your needs.
          </Trans>
        </p>
      </div>
      <ContextProvider params={{ dataInit: data }}>
        <Overview></Overview>
        <FilterContextProvider>
          <LeasesProvider>
            <div className="space-y-8">
              <Search></Search>
              <SearchResults></SearchResults>
            </div>
            <RecentLeases></RecentLeases>
            <RecentMt></RecentMt>
          </LeasesProvider>
        </FilterContextProvider>
      </ContextProvider>
    </div>
  );
}
