import { useState } from "react";

import { ImageBackground, View } from "react-native";
import hotbg from "./assets/hot.png";
import Style from "./App.style";
import Input from "./components/input/Input";
import TempDisplay from "./components/tempDisplay/TempDisplay";
import { DEFAULT_UNIT, DEFAULT_TEMP } from "./utils/constant";
import { convertTempTo, getOppositUnit } from "./services/temp-service";
import ConvertButton from "./components/button/ConvertButton";

export default function App() {
  const [temp, setTemp] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositUnit = getOppositUnit(currentUnit);

  const getConvertedTemp = () => {
    const tempAsFloat = parseFloat(temp);
    return isNaN(tempAsFloat)
      ? ""
      : convertTempTo(oppositUnit, tempAsFloat).toFixed(1);
  };

  return (
    <ImageBackground source={hotbg} style={Style.container}>
      <View style={Style.innerContainer}>
        <TempDisplay value={getConvertedTemp()} unit={oppositUnit} />
        <Input defaultValue={temp} handleTextInput={setTemp} />

        <ConvertButton />
      </View>
    </ImageBackground>
  );
}
