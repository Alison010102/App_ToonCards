import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../src/styles/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.welEl}>
      <Text style={styles.logoWelcome}>Pronto para Iniciar?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welEl: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWelcome: {
    color: Colors.corBranca,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
});
