import { useState } from "react";
import {Text, TouchableOpacity, View, Switch,  } from "react-native";
import { styles } from "./style";

interface Props {
  nome: string
  concluida: boolean
  btnRemover: () => void
  TarefaConcluida: () => void

}

export function Tarefa({ nome, concluida, TarefaConcluida, btnRemover }: Props) {
  function confirma() {
    TarefaConcluida()
  }

  function excluir() {
    btnRemover()
  }
    
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={confirma}>
    <View style={styles.contador}>
    <Text
          style={[
            styles.textTarefas,
            { textDecorationLine: concluida ? "line-through" : "none" },
          ]}
        >
          {nome}
        </Text>
        </View>
        <TouchableOpacity style={styles.concluidaBotao} onPress={confirma}>
        <Text style={styles.concluidaBotaoTexto}>V</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={excluir}>
        <Text style={styles.removerBotaoTexto}>-</Text>
      </TouchableOpacity>
   
    </TouchableOpacity>
  )
}
