import { TouchableOpacity, View, Text, Modal } from "react-native";
import { styles } from "../styles/Styles";

// Import hook useSate
import React, { useState } from "react";

// Import Components
import TxtComponent from "../components/TxtComponent";
import InputComponents from "../components/InputComponents";

export default function Home() {
  // criacao das constantes dos para definir os valores utilizando useState
  const [Fahrenheit, setFahrenheit] = useState("");
  const [Celsius, setCelcius] = useState("");
  const [visible, setVisible] = useState(false);

  //Constante da conta
  const conversao = () => {
    //se o valor de celsius for diferente de vazio ele ira emitir um alerta, caso ao contrario ele executara a função
    if (Celsius != "") {
      const result = (Celsius * 9) / 5 + 32;
      setFahrenheit(result);
      setVisible(true);
    } else {
      alert("O valor de celsius não pode estar vazio!");
    }
  };

  //Constante btn para voltar para tela inicial
  const calcularNovamente = () => {
    setCelcius("");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Texto componente, passado por props na pagina TxtComponente */}
      <TxtComponent styletxt={styles.Texto} title="Digite o valor de Celsius" />

      {/* Input Componente, passad por props na pagina InputComponents */}
      <InputComponents
        styleinput={styles.Input}
        txtplace="digite o valor"
        value={Celsius}
        changeText={setCelcius}
      />

      {/* Btn Calcular */}
      <TouchableOpacity style={styles.btn} onPress={conversao}>
        <Text style={styles.txtbtn}>Calcular</Text>
      </TouchableOpacity>

      {/* Criacao do modal, para exibir o resultado do calculo */}
      <Modal animationType="fade" visible={visible}>
        <View style={styles.modal}>
          <Text style={styles.txt}>
            A conversão de Celsius para Fahrenheit é {Fahrenheit}
          </Text>
          {/* Btn paraa voltar para pagina inicial */}
          <TouchableOpacity onPress={calcularNovamente} style={styles.btn2}>
            <text style={styles.txt2}>Calcular novamente</text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
