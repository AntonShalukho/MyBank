import { locales } from "../locales";

import { widgetEn } from "../../../../widgets/assets/translation/widgetsEn";

import { entitiesEn } from "../../../../entities/assets/translation/entitiesEn";

import { featureEn } from "../../../../features/assets/translation/featureEn";

import { pagesEn } from "../../../../pages/assets/translation/pagesEn";

export const en = {
  [locales.english]: {
    cancel: "Cancel",
    confirm: "Confirm",
    mainPage: "Main page",
    products: "Products",
    signUp: "Sign up",
    logIn: "Log in",
    logOut: "Log out",
    online: "Online",
    backButton: "Back",
    continue: "Continue",
    resend: "Resend",
    name: "Name",
    surname: "Surname",
    phone: "Phone Number",
    pesel: "PESEL",
    email: "E-mail",
    password: "Password",
    passport: "Passport",
    datePlaceholder: "DD/MM/YYYY",
    offline: "Offline",
    congratulations: "Congratulations!",
    agree: "Agree",
    open: "Open",
    change: "Change",
    close: "Close",
    edit: "Edit",
    tryAgain: "Try again",
    country: "Country",
    poland: "Poland",
    city: "City",
    ...widgetEn,
    ...entitiesEn,
    ...featureEn,
    ...pagesEn,
  },
};
