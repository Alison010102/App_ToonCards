import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Colors } from "../../src/styles/colors";

export default function WelcomeScreen () {
    return (
        <SafeAreaView style={styles.welEl}>
            <Text style={styles.logoWelcome}>Pronto para Iniciar?</Text>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  welEl: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado, // Cor de fundo enquanto carrega
    justifyContent: "space-around",
    alignItems: "center",
  },

  logoWelcome: {
    color: Colors.corBranca,
    fontWeight: "bold",
    textAlign: "center"

  }
});
