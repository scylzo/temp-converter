import { Text, TouchableOpacity } from "react-native";
import Style from "./ConvertButton.style";

const ConvertButton = ({ unit, handleBtnConverter }) => {
  return (
    <TouchableOpacity onPress={handleBtnConverter} style={Style.btnStyle}>
      <Text style={Style.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
};

export default ConvertButton;
