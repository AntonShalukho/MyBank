import React, { useState } from "react";

import { IntlProvider } from "react-intl";

import { localeContent } from "./languages";

import { locales } from "./locales";

export const providerContext = React.createContext({
  isActive: "en-us",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsActive: (id: string) => {},
});

type ProviderType = {
  children?: React.ReactChild;
};

export const Provider = ({ children }: ProviderType) => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("locale") || locales.english
  );

  // eslint-disable-next-line functional/no-let
  let locale;

  // eslint-disable-next-line functional/no-conditional-statement
  if (isActive === "en-us") {
    locale = locales.english;
    // eslint-disable-next-line functional/no-conditional-statement
  } else {
    locale = locales.german;
  }
  return (
    <providerContext.Provider value={{ isActive, setIsActive }}>
      <IntlProvider
        locale={isActive}
        defaultLocale="en"
        messages={localeContent[locale]}
      >
        {children}
      </IntlProvider>
    </providerContext.Provider>
  );
};
