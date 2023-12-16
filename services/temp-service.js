import { UNITS } from "../utils/constant";

const getOppositUnit = (unit) => {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
};

const convertTempTo = (unit, value) => {
  //celcius to fahrenheit
  if (unit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    // fahrenheit to celcius
    return value * 1.8 + 32;
  }
};

export { getOppositUnit, convertTempTo };
