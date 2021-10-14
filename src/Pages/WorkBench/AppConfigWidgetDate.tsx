/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import TextField from "@mui/material/TextField";

import { formatISO } from "date-fns";
import DatePicker from "@mui/lab/DatePicker";
import { useApplicationUtilities } from "../../Application/AppContextProviders/hooks";

const dummyIsValid = (value: unknown) => true;

const toMidnight = (date: Date) => {
  const dateWithoutTime = date.toISOString().split("T")[0];
  return new Date(dateWithoutTime);
};
interface Props {
  id: string;
  isValid?: (value: unknown) => boolean;
  label: string;
  name: string;
  onChange: (value: string) => void; // we'll allow empty strings
  value: string;
}
export function AppConfigWidgetDate({
  id,
  isValid = dummyIsValid,
  label,
  name,
  onChange,
  value,
}: Props): JSX.Element {
  // const [locale, setLocale] = React.useState<keyof typeof maskMap>("en");
  const { getLocale } = useApplicationUtilities();
  const appLocale = getLocale();

  const handleOnChange = (newValue: Date | null) => {
    // (newValue) => setValue(newValue)

    if (newValue !== null) {
      onChange(formatISO(toMidnight(newValue)));
      // setValue(toMidnight(newValue));
    } else {
      // onChange(newValue);
      onChange("");
      // setValue(newValue);
    }
  };
  //    {/*<LocalizationProvider dateAdapter={AdapterDateFns} locale={appLocale.dateFnsLocale}>

  return (
    <DatePicker
      label={label}
      mask={appLocale.dateFormatMap}
      value={value}
      onChange={handleOnChange}
      InputProps={{ id, name }}
      renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} />}
    />
  );
}

AppConfigWidgetDate.defaultProps = {
  isValid: dummyIsValid,
};
