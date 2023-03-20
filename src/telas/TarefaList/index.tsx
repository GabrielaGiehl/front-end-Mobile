import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Tarefa } from "../../componente/Tarefa";
import { styles } from "./style";

export default function Principal() {
  const [tarefas, setTarefas] = useState<String[]>([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefas() {
    if (tarefas.includes(tarefa.trim())) {
      return console.log(tarefa, "- encontrado");
    } else if (tarefa == "" || tarefa == null) {
      return console.log("encontrado vazio ou null");
    } else {
      setTarefas((prevState) => [...prevState, tarefa]);
    }
  }

  function removerTarefas(nome: string) {
    setTarefas((prevState) => prevState.filter(tarefa=> tarefa !== nome));
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.Image}
          source={require("../../../assets/tarefasLista.png")}
        />
      </View>
      <StatusBar style="auto" />
      <Text style={styles.textListaTarefa}>Lista de tarefas !</Text>
      <Text style={styles.textTarefa}> Tarefas para realizar :)</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInputTarefa}
          placeholder="Nome da tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTarefa}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarTarefas}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textTarefaRealizar}>Tarefas =</Text>

      <Text style={styles.textConcluidas}>Tarefas Concluídas =</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
        tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            nome={String(tarefa)}
            btnRemover={() => removerTarefas(String(tarefa))}
          />
        ))}
      </ScrollView>
    </View>
  );
}
