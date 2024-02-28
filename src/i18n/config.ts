import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation.json";
import npTranslations from "./locales/np/translation.json";

try {
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translations: enTranslations,
      },
      np: {
        translations: npTranslations,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

  i18n.languages = ["en", "np"];
} catch (error) {
  console.error("Error initializing i18n:", error);
}

export default i18n;
