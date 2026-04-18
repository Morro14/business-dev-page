import { Outlet, useLocation, Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LANGUAGES, DEFAULT_LANGUAGE } from "~/vars";

function getLanguagePathParam(pathname: string) {
  let segments = [];
  if (!pathname) {
    const url = new URL(document.location.toString());
    segments = url.pathname.split("/");
  } else {
    segments = pathname.split("/");
  }
  return segments[1];
}

export default function Language() {
  const { i18n } = useTranslation();
  const detectedLang = i18n.language;
  const loc = useLocation();
  const pathname = loc.pathname;
  const searchParams = loc.search;
  const lang = getLanguagePathParam(pathname);

  if (!lang && detectedLang && LANGUAGES.includes(detectedLang)) {
    const cleanPathname = pathname.replace("/", "");
    return (
      <Navigate
        to={`/${detectedLang}${cleanPathname}${searchParams}`}
        replace
      ></Navigate>
    );
  }

  if (!lang) {
    const cleanPathname = pathname.replace("/", "");
    return (
      <Navigate
        to={`/${DEFAULT_LANGUAGE}${cleanPathname}${searchParams}`}
        replace
      ></Navigate>
    );
  }

  if (!LANGUAGES.includes(lang)) {
    const segments = pathname.split("/");
    segments[1] = DEFAULT_LANGUAGE;
    const newPathname = segments.join("/");
    return <Navigate to={`${newPathname}${searchParams}`} replace></Navigate>;
  }
  return <Outlet></Outlet>;
}
