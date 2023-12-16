import { Text } from "react-native";
import Style from "./TempDisplay.style";
const TempDisplay = ({ value, unit }) => {
  return (
    <Text style={Style.text}>
      {value} {unit}
    </Text>
  );
};

export default TempDisplay;
