// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./locales/en.json";
// import hi from "./locales/hi.json";
// import ind from "./locales/ind.json";
// import jr from "./locales/jr.json";
// import th from "./locales/th.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: en,
//     },
//     hi: {
//       translation: hi,
//     },
//     ind: {
//       translation: ind,
//     },
//     jr: {
//       translation: jr,
//     },
//     th: {
//       translation: th,
//     },
//   },
//   lng: "en", // default language
//   fallbackLng: "en", // fallback language when the chosen one is not available
//   interpolation: {
//     escapeValue: false, // react already escapes values to prevent XSS
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Dynamically import all JSON files from the locales directory
const resources = {};
const requireContext = require.context("./locales", true, /\.json$/);
requireContext.keys().forEach((fileName) => {
  const lang = fileName.replace("./", "").replace(".json", ""); // Extract the language code
  resources[lang] = {
    translation: requireContext(fileName), // Import the JSON file
  };
});

i18n
  .use(LanguageDetector) // Add the language detector
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    detection: {
      // LanguageDetector settings
      order: ["localStorage", "navigator"], // Check localStorage first, then browser settings
      caches: ["localStorage"], // Store the selected language in localStorage
    },
  });

export default i18n;
