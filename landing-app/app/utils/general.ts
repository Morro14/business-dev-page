import type { Language } from "~/vars";

export const indexPathMatch = (pathname: string, lang: Language) => {
  const regex = new RegExp(`^\/${lang}\/?$`, "g");
  return regex.test(pathname);
};
