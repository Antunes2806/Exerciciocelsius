import { Text } from "react-native";

//Recebendo components por props
export default function TextComponent({ title, styletxt }) {
  return <Text style={styletxt}>{title}</Text>;
}
