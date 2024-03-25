import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const listaTermos = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
  "O riso é a menor distância entre duas pessoas.",
];

export default function App() {
  const [image, setImage] = useState(require("./src/biscoito.png"));
  const [texto, setTexto] = useState("");

  function quebrarBiscoito() {
    setImage(require("./src/biscoitoAberto.png"));
    let i = Math.floor(Math.random() * listaTermos.length);
    setTexto('"' + listaTermos[i] + '"');
  }
  function arrumarBiscoito() {
    setImage(require("./src/biscoito.png"));
    setTexto("");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text style={styles.textoFrase}>{texto}</Text>

      <TouchableOpacity onPress={() => quebrarBiscoito()}>
        <View>
          <Text style={styles.botaoQuebrar}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => arrumarBiscoito()}>
        <View>
          <Text style={styles.reiniciarBiscoito}>Voltar no tempo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botaoQuebrar: {
    fontSize: 20,
    color: "#dd7b22",
    fontWeight: "bold",
    padding: 15,
    borderRadius: 100,
    textAlign: "center",
    width: 200,
    borderWidth: 2,
    borderColor: "#ff9900",
  },
  reiniciarBiscoito: {
    fontSize: 20,
    color: "#1100ff",
    fontWeight: "bold",
    padding: 15,
    borderRadius: 100,
    textAlign: "center",
    width: 200,
    borderWidth: 2,
    borderColor: "#1100ff",
    marginTop: 10,
  },
});
