import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../src/styles/colors";
import { useNavigation } from '@react-navigation/native';
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.welEl}>
      <Text style={styles.logoWelcome}>Pronto para Iniciar?</Text>
      <Image
        style={{ width: "100%", height: 300, marginTop: 20, marginLeft: 15, resizeMode: "contain" }}
        source ={require("../../assets/backgroud-pokemon.png")}
      />  

      <View style={{alignItems: "center", marginBottom: 10, width: "100%"}}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SingUpScreen")}>
            <Text style={styles.textBtn}>Começar</Text>
        </TouchableOpacity>
          <Text style={{color: '#ffffffff'}}>Já possui uma conta? 
            <Text style={{marginLeft: 10, fontWeight: 'bold', color: Colors.segundaMaisEscura}} onPress={() => navigation.navigate('login')}>Login</Text>
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welEl: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado,
    justifyContent: "space-around",
    alignItems: "center",
  },
  logoWelcome: {
    color: Colors.corBranca,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  btn: {
    marginTop: 40,
    backgroundColor: Colors.segundaMaisEscura,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
    marginBottom: 10,
    width: "60%",
    alignItems: "center",
  },
  textBtn: {
    color: Colors.corBranca,
    fontSize: 18,
    fontWeight: "bold",
  },
});
