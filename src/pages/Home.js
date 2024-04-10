import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "../styles/Styles";

// Import hook useSate
import React, { useState } from "react";

// Import Components
import TxtComponent from "../components/TxtComponent";
import InputComponents from "../components/InputComponents";

export default function Home() {
  const [Fahrenheit, setFahrenheit] = useState("");
  const [Celsius, setCelcius] = useState("");

  const conversao = () => {
    const result = (Celsius * 9) / 5 + 32;
    setFahrenheit(result);
  };

  return (
    <View style={styles.container}>
      <TxtComponent styletxt={styles.Texto} title="Digite o valor de Celsius" />
      <InputComponents
        styleinput={styles.Input}
        txtplace="digite o valor"
        value={Celsius}
        changeText={setCelcius}
      />
      <TouchableOpacity style={styles.btn} onPress={conversao}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>A conversão de Celsius para Fahrenheit é {Fahrenheit}</Text>
    </View>
  );
}
