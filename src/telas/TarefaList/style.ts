import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF1493",
    padding: 24,
  },
  Image: {
    width: 150, 
    height: 150,

  },
  containerImage: {
    justifyContent: "center",
    display: "flex",
    alignItems:"center"
  },

  textListaTarefa: {
    color: "#FDFCFE",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 60,
    fontFamily: "Roboto_300Light",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  textTarefa: {
    color: "##000000",
    fontSize: 25,
    fontFamily: "Roboto_300Light"
  },
  textInputTarefa: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 4,
    color: "#fff",
    padding: 16,
    fontSize: 20,
    marginRight: 12,
    fontFamily: "Roboto_300Light"
  },
  botao: {
    width: 56,
    height: 56,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  textTarefaRealizar: {
    fontFamily: "Roboto_300Light",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 23,
    color: "#FDFCFE",
    marginBottom: 16,
  },
 textConcluidas: {
  fontFamily: "Roboto_300Light",
  fontWeight: "700",
  fontSize: 24,
  lineHeight: 23,
  color: "#FDFCFE",
  marginBottom: 16,
 }

});
