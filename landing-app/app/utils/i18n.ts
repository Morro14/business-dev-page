import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

import translationEN from "../../src/i18n/locales/en/translation.json";
import translationRU from "../../src/i18n/locales/ru/translation.json";

i18n
  .use(
    resourcesToBackend((language, namespace) => {
      return import(
        `../../src/i18n/locales/${language}/${namespace}.json`
      ).then((module) => module.default);
    }),
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
    },
    ns: ["translation", "demo-lease-app"],
    defaultNS: "translation",
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    // debug: import.meta.env.VITE_DEBUG === "true",
    debug: true,

    detection: {
      order: ["path", "navigator"],
      // caches: ["localStorage", "cookie"],
      lookupFromPathIndex: 0,
    },
    // backend: {
    //   loadPath: "/src/i18n/locales/{{lng}}/{{ns}}.json",
    // },
    interpolation: {
      escapeValue: false,
    },
    partialBundledLanguages: true,
  });
i18n.loadNamespaces(["demo-lease-app"]);
export default i18n;
