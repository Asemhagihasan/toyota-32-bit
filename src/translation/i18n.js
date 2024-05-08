import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translatedAuthEn } from "./locals/en/translatedAuthEn";
import { translatedErrorsEn } from "./locals/en/translatedErrorsEn";
import { translatedSideBarItemsEn } from "./locals/en/translatedSideBarItemsEn";
import { translatedSetLocationEn } from "./locals/en/translatedSetLocationEn";
import { translatedErrorsFr } from "./locals/fr/translatedErrorsFr";
import { translatedAuthFr } from "./locals/fr/translatedAuthFr";
import { translatedSideBarItemsFr } from "./locals/fr/translatedSideBarItemsFr";
import { translatedSetLocationFr } from "./locals/fr/translatedSetLocationFr";
import { translatedErrorsTr } from "./locals/tr/translatedErrorsTr";
import { translatedAuthTr } from "./locals/tr/translatedAuthTr";
import { translatedSideBarItemsTr } from "./locals/tr/translatedSideBarItemsTr";
import { translatedSetLocationTr } from "./locals/tr/translatedSetLocationTr";

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
          sideBarItems: translatedSideBarItemsEn,
          setLocation: translatedSetLocationEn,
        },
      },
      fr: {
        translation: {
          auth: translatedAuthFr,
          errors: translatedErrorsFr,
          sideBarItems: translatedSideBarItemsFr,
          setLocation: translatedSetLocationFr,
        },
      },
      tr: {
        translation: {
          auth: translatedAuthTr,
          errors: translatedErrorsTr,
          sideBarItems: translatedSideBarItemsTr,
          setLocation: translatedSetLocationTr,
        },
      },
    },
  });
export default i18next;
