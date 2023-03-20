import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contador: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTarefas: {
    marginLeft: 16,
    fontFamily: "Roboto_300Light",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FCFDFE",
  },
  concluidaBotao: {
    backgroundColor: "#31CF67",
    width: 56,
    height: 56,
    borderRadius: 5,
    padding: 5,
    marginHorizontal:0,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"

  

    
  },
  botao: {
    width: 56,
    height: 60,
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  concluidaBotaoTexto: {
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
    
  },
  removerBotaoTexto: {
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
},
})