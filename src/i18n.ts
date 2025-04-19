import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import nav from "./locales/en/nav.json";
import nav_vi from "./locales/vi/nav.json";

export const defaultNS = "nav";

export const resources = {
  en: {
    nav: nav,
  },
  vi: {
    nav: nav_vi,
  },
} as const;

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: "en",
    supportedLngs: ["en", "vi"],
    ns: ["nav"],
    defaultNS,
    resources,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export default i18n;
