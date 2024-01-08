import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEN from "../public/en/translationEN.json";
import translationUK from "../public/uk/translationUK.json";
import translationRU from "../public/ru/translationRU.json";

const resources = {
  en: {
    translation: translationEN
  },
  uk: {
    translation: translationUK
  },
  ru:{
    translation: translationRU
  }
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    debug: true,
    fallbackLng: 'ru',
    resources
  });

i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
});

export default i18n;