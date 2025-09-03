import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../styles/colors';


export default function SingUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SingUp</Text>
      <View style={styles.boxEfeito}></View>
      <View style={styles.boxEfeitoTwo}></View>
      <View style={styles.boxEfeitoThee}></View>
      <View style={styles.boxEfeitoFour}></View>
      <View style={styles.boxEfeitoFive}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado, // Cor de fundo enquanto carrega
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.corBranca,
  },
  boxEfeito: {
    position: "absolute",
    top: -70,
    right: -70,
    width: 200, 
    height: 200,
    backgroundColor: Colors.corBranca,
    marginTop: 20,
    borderRadius: "50%",
    // Adiciona sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adiciona sombra para Android
    elevation: 5,
    zIndex: 3,
  },
  boxEfeitoTwo:{
    position: "absolute",
    top: 100,
    right: -50,
    borderRadius: "50%",
    backgroundColor: Colors.corParaEfeito,
    width: 100, 
    height: 100,
    zIndex: 3,
  },
  boxEfeitoThee:{
    position: "absolute",
    bottom: "-52%", 
    backgroundColor: Colors.corParaEfeito,
    width: 750, 
    height: 750,
    borderRadius: "50%",
    zIndex: 3,
  },
  boxEfeitoFour:{ 
    position: "absolute",
    bottom: -70, 
    right: -70,
    borderRadius: "50%",
    backgroundColor: Colors.corBranca, 
    width: 250, 
    height: 250,
    zIndex: 3,
  },
  boxEfeitoFive:{ 
    position: "absolute",
    top: "-20%",
    left: "-50%",
    borderRadius: "50%",
    backgroundColor: Colors.amareloMaisClaro,
    width: 600, 
    height: 600,
    zIndex: 1,
  },
});
