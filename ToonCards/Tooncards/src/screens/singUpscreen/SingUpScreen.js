import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../styles/colors';


export default function SingUp() {
  return (
    <View style={styles.container}>
      <View style={styles.boxEfeito}></View>
      <View style={styles.boxEfeitoTwo}></View>
      <View style={styles.boxEfeitoThee}></View>
      <View style={styles.boxEfeitoFour}></View>
      <View style={styles.boxEfeitoFive}></View>

      <View style={styles.formSingUp}>
        <Text style={styles.logo}>Fazer Cadastro</Text>
        <View style={styles.boxForm}>
          <TextInput style={styles.formImput} 
            placeholder="Nome:"
            placeholderTextColor={Colors.segundaMaisEscura}
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            autoComplete="name"
          />
          <TextInput style={styles.formImput}
            placeholder="Email:"
            placeholderTextColor={Colors.segundaMaisEscura}
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <View style={styles.boxsecurity}>
            <TextInput style={styles.idade}
              placeholder="Idade:"
              placeholderTextColor={Colors.segundaMaisEscura}
              keyboardType="number-pad"
              autoCapitalize="none"
              // secureTextEntry={true}
            />
            <TextInput style={styles.password}
              placeholder="Senha:"
              placeholderTextColor={Colors.segundaMaisEscura}
              keyboardType="visible-password"
              autoCapitalize="none"
              secureTextEntry={true}
          />
          </View>
           <TextInput style={styles.formImput}
            placeholder="Confirme sua Senha:"
            placeholderTextColor={Colors.segundaMaisEscura}
            keyboardType="email-address"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
      </View>
        <TouchableOpacity style={styles.btn}>
          <Text style ={ styles.textBtn}>Criar Conta</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado, // Cor de fundo enquanto carrega
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 20,
  },
  formSingUp: {
    borderRadius: 40,
    position: "relative",
    zIndex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    // backgroundColor: Colors.corBranca,
  },
  logo: {
    position: "absolute",
    top: 0,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.segundaMaisEscura,
  },
  boxForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formImput: {
    fontSize: 15,
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "80%",
    fontWeight: "bold"
  },
  idade: {
    fontSize: 15,
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "19%",
    fontWeight: "bold"
  },
  password: {
    fontSize: 15,
    backgroundColor: Colors.corBrancaMaisEscura,
    color: "black",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: "55%",
    fontWeight: "bold"
  },
  boxsecurity: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: Colors.amareloMaisClaro
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

  btn: {
    position: "absolute",
    width: "80%",
    bottom: 90,
    backgroundColor: Colors.segundaMaisEscura,
    padding: 15,
    textAlign:"center",
    borderRadius: 10,
    borderColor: "none",
    zIndex: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textBtn:{
    color: Colors.corBranca,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  }
});
