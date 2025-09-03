import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.corMaisEscura,
    alignItems: "center",
    justifyContent: "flex-start", // <- muda para alinhar no topo
  },

  imgEl: {
    width: 120,
    height: 120,
    marginTop: 80, // espaço do topo
    borderRadius: 60,
    resizeMode: "cover",
    textAlign: "center",
    
  },

  boxLogin: {
    flex: 1,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 150, // distância entre a imagem e a view
    borderTopLeftRadius: 70,
    borderTopRightRadius: -70,
    backgroundColor: Colors.amareloQueimado,
     elevation: 6,
  },
  after: {
  width: "100%",
  height: 0,
  top: -70,
  right: -15,
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderTopWidth: 40,
  borderBottomWidth: 40,
  borderRightWidth: 60,
  borderTopColor: "transparent",
  borderBottomColor: "transparent",
  borderRightColor: Colors.amareloQueimado,
  },

  title: {
    fontSize: 50,
    color: Colors.segundaMaisEscura,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 20,
    color: Colors.corMaisEscura,
    marginBottom: 10,
  },

  formImput: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: Colors.corMaisEscura,
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "95%",
    
  },

  formBtn: {
    fontSize: 22,
    backgroundColor: Colors.segundaMaisEscura,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: "95%",
    alignItems: "center",
  },

  textBtn: {
    fontSize: 22,
    color: Colors.corBrancaMaisEscura,
    fontWeight: "bold",
  },

  boxForgotRegister: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },

  texForgotRegister: {
    fontSize: 15,
    color: Colors.corMaisEscura,
    marginBottom: 10,
  },

  alternativo: {
    fontSize: 15,
    color: Colors.corMaisEscura,
    marginTop: 20,
    marginBottom: 10,
  },

  boxSocialMidia:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
    padding: 10,
  },

  iconBox:{
    // backgroundColor: Colors.corBranca,
    borderRadius: 50,
    padding: 15,
  },

  icons:{
    width: 40,
    height: 40,
    // resizeMode: "cover",
    // textAlign: "center",
  }

});