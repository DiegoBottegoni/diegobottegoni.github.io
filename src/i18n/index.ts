import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import es from './es.json';

function applyDocumentLang(lng: string) {
  document.documentElement.lang = lng.toLowerCase().startsWith("es") ? "es" : "en";
}

i18n.on("languageChanged", applyDocumentLang);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en', // si no detecta o no hay traducción disponible
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // guarda la preferencia en localStorage
    },
  })
  .then(() => {
    applyDocumentLang(i18n.resolvedLanguage || i18n.language);
  });

export default i18n;
