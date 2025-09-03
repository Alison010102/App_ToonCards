import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function SingUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

}
const handleCadastro = async () => {
  if (!nome || !email || !senha) {
    Alert.alert("Preencha todos os campos obrigatórios");
    return;
  }
  try {
    const response = await fetch("http://10.2.2:3333/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now().toString(),
        name: nome,
        email: email,
        age: parseInt(idade),
        password: senha,
      }),
    });
    const data = await response.json();
    if (respomse.ok) {
      Alert.alert("Usuário cadastrado com sucesso");
      navigation.navigate("login");
    }
    else {
      Alert.alert(data.error || "Erro ao cadastrar")
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Erro de conexão")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.amareloQueimado, // Cor de fundo enquanto carrega
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.corBranca,
  },
});
