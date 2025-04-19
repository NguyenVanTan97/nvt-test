import "react-i18next";
import { resources, defaultNS } from "./i18n";

declare module "react-i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: typeof defaultNS;
    resources: {
      nav: {
        about: string;
        game: string;
        partners: string;
        contact: string;
      };
    };
  }
}
