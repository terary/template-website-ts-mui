import React from "react";
import ApplicationUtilitiesProvider from "./ApplicationUtilitiesProvider";
import DateLocalizationProvider from "./DateLocalizationProvider";
import GabbyThemeProvider from "./GabbyThemeProvider";
interface IAppProviderParameters {
  children?: React.ReactNode;
}

export const AppContextProviders = ({ children }: IAppProviderParameters) => {
  return (
    <ApplicationUtilitiesProvider>
      <GabbyThemeProvider>
        <DateLocalizationProvider>{children}</DateLocalizationProvider>
      </GabbyThemeProvider>
    </ApplicationUtilitiesProvider>
  );
};
