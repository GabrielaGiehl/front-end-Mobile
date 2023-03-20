import Tarefas  from "./src/telas/TarefaList";

import { Roboto_300Light, useFonts } from "@expo-google-fonts/roboto";
export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Tarefas />
    </>
  );
}
