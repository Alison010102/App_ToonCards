import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.corMaisEscura, // cor de fundo do login
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: "#fff", // cor do texto do login
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: Colors.amareloQueimado, // cor do texto do login
    marginBottom: 10,
  },

  formImput: {
    fontSize: 22,
    borderWidth: 1,
    borderColor: Colors.amareloQueimado,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: "95%",
  },

  formBtn: {
    fontSize: 22,
    borderWidth: 1,
    backgroundColor: Colors.amareloQueimado,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: "95%",
    alignItems: "center",

  },
  textBtn:{
    fontSize: 22,
    color: Colors.corMaisEscura,
    fontWeight: "bold",
  },

  boxForgotRegister: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%"
  },
  
});
