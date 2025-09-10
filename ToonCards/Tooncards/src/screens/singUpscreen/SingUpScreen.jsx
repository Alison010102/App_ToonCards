import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Colors } from "../../styles/colors";
import { styles } from "../singUpscreen/singUp";
import { useNavigation } from "@react-navigation/native";

export default function SingUp() {
  const navigation = useNavigation();

  // Estados para os campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  // Função para enviar os dados para o servidor
  const handleRegister = async () => {
    // Validações básicas
    if (!nome || !email || !idade || !senha || !confirmSenha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (senha !== confirmSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("https://back-ts-cjm8.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nome,          // ✅ Enviando o campo correto
          email: email,
          age: Number(idade),  // ✅ Convertendo para número
          password: senha,     // ✅ Campo correto
        }),
      });

      const data = await response.json();
      console.log("Resposta do servidor:", data);

      if (response.ok) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");

        // Limpa os campos
        setNome("");
        setEmail("");
        setIdade("");
        setSenha("");
        setConfirmSenha("");

        // Redireciona para a Home
        navigation.navigate("WelcomeScreen");
      } else {
        Alert.alert("Erro", data.error || data.message || "Erro ao cadastrar!");
      }
    } catch (error) {
      console.log("Erro no cadastro:", error);
      Alert.alert("Erro", "Não foi possível conectar ao servidor!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Efeitos visuais */}
      <View style={styles.boxEfeito}></View>
      <View style={styles.boxEfeitoTwo}></View>
      <View style={styles.boxEfeitoThee}></View>
      <View style={styles.boxEfeitoFour}></View>
      <View style={styles.boxEfeitoFive}></View>

      <View style={styles.formSingUp}>
        <Text style={styles.logo}>Fazer Cadastro</Text>
        <View style={styles.boxForm}>
          <TextInput
            style={styles.formImput}
            placeholder="Nome:"
            placeholderTextColor={Colors.segundaMaisEscura}
            keyboardType="default"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.formImput}
            placeholder="Email:"
            placeholderTextColor={Colors.segundaMaisEscura}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.boxsecurity}>
            <TextInput
              style={styles.idade}
              placeholder="Idade:"
              placeholderTextColor={Colors.segundaMaisEscura}
              keyboardType="numeric"
              value={idade}
              onChangeText={setIdade}
            />
            <TextInput
              style={styles.password}
              placeholder="Senha:"
              placeholderTextColor={Colors.segundaMaisEscura}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>
          <TextInput
            style={styles.formImput}
            placeholder="Confirme sua Senha:"
            placeholderTextColor={Colors.segundaMaisEscura}
            secureTextEntry
            value={confirmSenha}
            onChangeText={setConfirmSenha}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.textBtn}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
