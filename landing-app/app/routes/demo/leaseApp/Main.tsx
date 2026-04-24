import { genData } from "~/components/demo/lease-app/init";
import Overview from "~/components/demo/lease-app/components/Overview";
import ContextProvider, {
  useCustomContext,
} from "~/components/demo/lease-app/components/Context";
import { useTranslation } from "react-i18next";
import Search from "~/components/demo/lease-app/components/Search";
import FilterContextProvider from "~/components/demo/lease-app/components/FilterContext";
import SearchResults from "~/components/demo/lease-app/components/SearchResults";
import { LeasesProvider } from "~/components/demo/lease-app/components/LeasesContextProvider";

export default function Main() {
  const data = genData();
  const { t } = useTranslation();
  return (
    <div className="text-text-main grow">
      <main className="md:w-7xl max-w-7xl mx-auto px-6 pb-24 pt-10 space-y-16">
        <h1>{t("Demo dashboard for equipment leasing service")}</h1>
        <ContextProvider params={{ dataInit: data }}>
          <Overview></Overview>
          <FilterContextProvider>
            <LeasesProvider>
              <Search></Search>
              <SearchResults></SearchResults>
            </LeasesProvider>
          </FilterContextProvider>
        </ContextProvider>
      </main>
    </div>
  );
}
