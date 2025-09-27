import { StyleSheet } from "react-native";  
import { Colors } from "../../../styles/colors";

export const OnePieceStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cinzaEscuro,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, 
},
  title: {
    fontSize: 28,
    color: Colors.dourado,
    fontWeight: 'bold',
  },
});
