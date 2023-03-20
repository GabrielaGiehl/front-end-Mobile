import { useState} from 'react'
import { Switch, StyleSheet} from 'react-native';
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface Props {
  nome: string
  btnRemover: () => void
}

export function Tarefa({ nome, btnRemover }: Props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    

    <View style={styles.container}>
      <Switch
        style={styles.toggle}
        trackColor={{false: '#767577', true: '#31CF67'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   
    
      <Text style={styles.textTarefas} > {nome} </Text>
      <TouchableOpacity style={styles.botao} onPress={btnRemover}>
        <Text style={styles.botaoTexto}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
