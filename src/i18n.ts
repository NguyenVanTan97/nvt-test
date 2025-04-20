import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import nav from "./locales/en/nav.json";
import about from "./locales/en/about.json";
import game from "./locales/en/game.json";
import contact from "./locales/en/contact.json";
import other from "./locales/en/other.json";
import nav_vi from "./locales/vi/nav.json";
import about_vi from "./locales/vi/about.json";
import game_vi from "./locales/vi/game.json";
import contact_vi from "./locales/vi/contact.json";
import other_vi from "./locales/vi/other.json";

export const defaultNS = "nav";

export const resources = {
  en: {
    nav: nav,
    about: about,
    game: game,
    contact: contact,
    other: other,
  },
  vi: {
    nav: nav_vi,
    about: about_vi,
    game: game_vi,
    contact: contact_vi,
    other: other_vi,
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
    ns: ["nav",'contact','about','game','partners','other'],
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
