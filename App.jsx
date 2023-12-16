import { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import hotbg from "./assets/hot.png";
import coldBg from "./assets/cold.png";
import Style from "./App.style";
import Input from "./components/input/Input";
import TempDisplay from "./components/tempDisplay/TempDisplay";
import { DEFAULT_UNIT, DEFAULT_TEMP, UNITS } from "./utils/constant";
import {
  convertTempTo,
  getOppositUnit,
  isIceTemp,
} from "./services/temp-service";
import ConvertButton from "./components/button/ConvertButton";

export default function App() {
  const [temp, setTemp] = useState(DEFAULT_TEMP);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBg, setCurrentBg] = useState(hotbg);
  const oppositUnit = getOppositUnit(currentUnit);

  useEffect(() => {
    const tempAsFloat = parseFloat(temp);
    if (!isNaN(tempAsFloat)) {
      const isBgCold = isIceTemp(currentUnit, temp);
      setCurrentBg(isBgCold ? coldBg : hotbg);
    }
  }, [temp]);

  const getConvertedTemp = () => {
    const tempAsFloat = parseFloat(temp);
    return isNaN(tempAsFloat)
      ? ""
      : convertTempTo(oppositUnit, tempAsFloat).toFixed(1);
  };

  const handleBtnConverter = () => {
    setCurrentUnit(oppositUnit);
  };

  return (
    <ImageBackground source={currentBg} style={Style.container}>
      <View style={Style.innerContainer}>
        <TempDisplay value={getConvertedTemp()} unit={oppositUnit} />
        <Input
          defaultValue={temp}
          handleTextInput={setTemp}
          unit={currentUnit}
        />

        <ConvertButton
          handleBtnConverter={() => handleBtnConverter(currentUnit)}
          unit={oppositUnit}
        />
      </View>
    </ImageBackground>
  );
}
