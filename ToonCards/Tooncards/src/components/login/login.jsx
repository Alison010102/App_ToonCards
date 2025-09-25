import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./login.styles";
import { Colors } from "../../styles/colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função para fazer login usando a rota de usuários
  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (email === "admin" && senha === "admin") {
      Alert.alert("Sucesso", "Bem-vindo, Admin!");
      setEmail("");
      setSenha("");
      
      // 🎯 CORREÇÃO APLICADA AQUI:
      // Navegação aninhada: Vai para o Stack 'MainApp' e define a tela Tab 'HomeTab'
      navigation.replace('MainApp', { 
          screen: 'HomeTab' 
      });
      // O 'replace' é mais adequado para login para que o usuário não possa voltar
      // para a tela de login usando o botão Voltar do celular.
      
      return;
    }

    // O restante do seu código 'try...catch' de API (comentado)
    /* ... */
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgEl}
        source={require("../../../assets/inicio.png")}
      />

      <View style={styles.boxLogin}>
        <View style={styles.after}></View>
        <TextInput
          style={styles.formImput}
          placeholder="Email"
          placeholderTextColor={Colors.segundaMaisEscura}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.formImput}
          placeholder="Password"
          placeholderTextColor={Colors.segundaMaisEscura}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        {/* Botão de Login */}
        <TouchableOpacity style={styles.formBtn} onPress={handleLogin}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>

        {/* Links de ações */}
        <View style={styles.boxForgotRegister}>
          <TouchableOpacity>
            <Text style={styles.texForgotRegister}>Esqueci a senha</Text>
          </TouchableOpacity>

          {/* ⚠️ CORREÇÃO PONTUAL: Removido o onPress duplicado */}
          <TouchableOpacity onPress={() => navigation.navigate("SingUpScreen")}> 
            <Text style={styles.texForgotRegister}>Quero me cadastrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.alternativo}>Ou entre com</Text>

        {/* Botões de login social */}
        <View style={styles.boxSocialMidia}>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source={require("../../../assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source={require("../../../assets/github.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source={require("../../../assets/facebook.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}