import { Text, TextInput } from "react-native";
import Style from "./Input.style";
import { View } from "react-native";

export default Input = ({ defaultValue, handleTextInput }) => {
  return (
    <View style={Style.container}>
      <TextInput
        placeholder="Tape une température"
        style={Style.inputStyle}
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={handleTextInput}
      />
      <Text style={Style.unit}>°C</Text>
    </View>
  );
};
