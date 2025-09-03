import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Depois de 2,5s, vai para o Login
    const timeout = setTimeout(() => {
      navigation.replace("Login");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/logo.png")}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Cor de fundo enquanto carrega
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
});
