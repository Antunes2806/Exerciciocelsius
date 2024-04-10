import { Text } from "react-native";

export default function TextComponent({ title, styletxt }) {
  return <Text style={styletxt}>{title}</Text>;
}
