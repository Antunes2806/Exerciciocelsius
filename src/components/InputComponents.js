import { TextInput } from "react-native";

export default function InputComponents({
  txtplace,
  value,
  changeText,
  styleinput,
}) {
  return (
    <TextInput
      style={styleinput}
      placeholder={txtplace}
      value={value}
      onChangeText={changeText}
    />
  );
}
