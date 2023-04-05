import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList
} from "react-native";
import axios from 'axios'
import { styles } from "./style";

interface Tarefa {
  id: number;
  nome: string;
  concluida: boolean;
}
export default function Principal() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [tarefa, setTarefa] = useState("");
  

  useEffect(() => {
    axios.get('http://192.168.0.109:3333/').then((response) => setTarefas(response.data));
  }, []);

  async function adicionarTarefa() {
    
      
    console.log("Func Funcionando");

    const response = await axios.post('http://192.168.0.109:3333/', { 
  
      nome: tarefa, });

      console.log(response.data);
   
      setTarefas([...tarefas, response.data]);
      setTarefa("");
  }

  async function concluirTarefa(id: number) {
    const atualizarTarefa = tarefas.find((tarefa) => tarefa.id === id);
    if (!atualizarTarefa) return;
    const response = await axios.patch(`http://192.168.0.109:3333/${id}`, {
      nome: atualizarTarefa.nome,
      concluida: !atualizarTarefa.concluida,
    });
    const tarefaAtualizada = tarefas.map((tarefa) =>
      tarefa.id === response.data.id ? response.data : tarefa
    );
    setTarefas(tarefaAtualizada);
  }
  async function deletarTarefa(id: number) {
    await axios.delete(`http://192.168.0.109:3333/${id}`);
    const tarefaAtualizadat = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefaAtualizadat);
  }
       
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerImage}>
        <Image style={styles.Image} source={require('../../../assets/tarefasLista.png')} />
      </View>
      <Text style={styles.textTarefaRealizar}>Lista de Tarefas</Text>
    

      <View style={styles.form}>
        <TextInput
          id="nome"
          style={styles.textInputTarefa}
          placeholder="Adicione a tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTarefa}
          value={tarefa}
        />
        <TouchableOpacity style={styles.botao} id="submit-button" onPress={adicionarTarefa}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    
      <ScrollView showsVerticalScrollIndicator={true}>
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.containerTarefa}
            onPress={() => concluirTarefa(item.id)}
          >
            <Text
              style={[
                styles.tituloTarefa,
                item.concluida && styles.concluirTarefa,
              ]}
            >
              {item.nome}
            </Text>
            { <Text style={styles.statusTarefa}>
              {item.concluida ? "concluida" : "Não concluida"}
            </Text> }
            <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
              <Text style={styles.botaoDeletar}>X</Text>
              </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        />
        </ScrollView>
      
      
    </View>
  );
}