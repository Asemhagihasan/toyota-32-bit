import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translatedAuthEn } from "./locals/en/translatedAuthEn";
import { translatedErrorsEn } from "./locals/en/translatedErrorsEn";
import { translatedErrorsFr } from "./locals/fr/translatedErrorsFr";
import { translatedAuthFr } from "./locals/fr/translatedAuthFr";
import { translatedErrorsTr } from "./locals/tr/translatedErrorsTr";
import { translatedAuthTr } from "./locals/tr/translatedAuthTr";
import { translatedHomePageFr } from "./locals/fr/translatedHomePageFr";
import { translatedHomePageEn } from "./locals/en/translatedHomePageEn";
import { translatedHomePageTr } from "./locals/tr/translatedHomePageTr";
import { translatedSalePageEn } from "./locals/en/translatedSalePageEn";
import { translatedSalePageFr } from "./locals/fr/translatedSalePageFr";
import { translatedSalePageTr } from "./locals/tr/translatedSalePageTr";
import { translatedSettingsPageEn } from "./locals/en/translatedSettingsPageEn";
import { translatedSettingsPageFr } from "./locals/fr/translatedSettingsPageFr";
import { translatedSettingsPageTr } from "./locals/tr/translatedSettingsPageTr";
import { translatedPageNotFoundEn } from "./locals/en/translatedPageNotFoundEn";
import { translatedPageNotFoundFr } from "./locals/fr/translatedPageNotFoundFr";
import { translatedPageNotFoundTr } from "./locals/tr/translatedPageNotFoundTr";

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          auth: translatedAuthEn,
          errors: translatedErrorsEn,
          salePage: translatedSalePageEn,
          homePage: translatedHomePageEn,
          settingsPage: translatedSettingsPageEn,
          pageNotFound: translatedPageNotFoundEn,
        },
      },
      fr: {
        translation: {
          auth: translatedAuthFr,
          errors: translatedErrorsFr,
          salePage: translatedSalePageFr,
          homePage: translatedHomePageFr,
          settingsPage: translatedSettingsPageFr,
          pageNotFound: translatedPageNotFoundFr,
        },
      },
      tr: {
        translation: {
          auth: translatedAuthTr,
          errors: translatedErrorsTr,
          salePage: translatedSalePageTr,
          homePage: translatedHomePageTr,
          settingsPage: translatedSettingsPageTr,
          pageNotFound: translatedPageNotFoundTr,
        },
      },
    },
  });
export default i18next;
