import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.corMaisEscura,
    alignItems: "center",
    justifyContent: "flex-start", // <- muda para alinhar no topo
    padding: 20,
  },

  imgEl: {
    width: 120,
    height: 120,
    marginTop: 50, // espaço do topo
    borderRadius: 60,
    resizeMode: "cover",
  },

  boxLogin: {
    flex: 1,
    width: "100%",
    marginLeft: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 150, // distância entre a imagem e a view
    borderTopLeftRadius: 70,
    borderTopRightRadius: 0,
    backgroundColor: Colors.amareloQueimado,
    
  },

  title: {
    fontSize: 50,
    color: Colors.segundaMaisEscura,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 20,
    color: Colors.amareloQueimado,
    marginBottom: 10,
  },

  formImput: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: Colors.segundaMaisEscura,
    color: Colors.amareloQueimado,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "95%",
  },

  formBtn: {
    fontSize: 22,
    borderWidth: 1,
    backgroundColor: Colors.corMaisEscura,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: "95%",
    alignItems: "center",
  },

  textBtn: {
    fontSize: 22,
    color: Colors.cinzaEscuro,
    fontWeight: "bold",
  },

  boxForgotRegister: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },

  texForgotRegister: {
    fontSize: 15,
    color: Colors.amareloQueimado,
    marginBottom: 10,
  },
});
