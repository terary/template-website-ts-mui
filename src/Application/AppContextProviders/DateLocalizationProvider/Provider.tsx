import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import type { TSupportedLocales } from "../../i18n";
import type { ApplicationUtilitiesType } from "../ApplicationUtilitiesProvider/type";
import { ApplicationUtilitiesContext } from "../ApplicationUtilitiesProvider/ApplicationUtilitiesProvider";

type Props = {
  children: React.ReactNode;
};
const DateLocalizationProvider = ({ children }: Props): JSX.Element => {
  const { getAppStateItemOrAlternative, getLocale } = React.useContext(
    ApplicationUtilitiesContext
  ) as ApplicationUtilitiesType;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={
        getLocale(getAppStateItemOrAlternative<TSupportedLocales>("locale", "en_us"))
          .dateFnsLocale
      }
    >
      {children}
    </LocalizationProvider>
  );
};
export default DateLocalizationProvider;
