/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from "react";

import { useApplicationUtilities } from "../../Application/AppContextProviders/hooks";
import { AppConfigWidgetDate } from "./AppConfigWidgetDate";
import AppConfigWidgetLocalizationTest from "./AppConfigWidgtLocalizationTest";

export const AppConfigWidget = () => {
  const { t, getAppConfigItem, setAppConfigItem } = useApplicationUtilities();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppConfigItem<string>("TEST_VALUE", e.currentTarget.value);
  };
  return (
    <>
      <h4>App Config Widget &quot;{getAppConfigItem("TEST_VALUE")}&quot;</h4>
      <input onChange={handleOnChange} />
      <button type="button">Update</button>
      <AppConfigWidgetDate
        id="myDateWidget"
        isValid={(d: any) => true}
        label="the Label"
        name="the-name"
        onChange={(d: any) => undefined}
        value="2021-10-09T23:32:59"
      />
      <AppConfigWidgetLocalizationTest />
    </>
  );
};
