import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "./login.styles";

export function Login() {
  return (
    <View style={styles.container}>
      {/* <image source={require("../../../assets/logo.png")} /> */}

      <Text style={styles.title}>Faça Login</Text>
      <TextInput style={styles.formImput} 
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput style={styles.formImput}
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <Pressable style={styles.formBtn}>
        <Text style={styles.textBtn}>Logar</Text>
      </Pressable>

      <View style={styles.boxForgotRegister}>
        <Pressable>
          <Text style={styles.text}>Esqueci a senha</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.text}>Quero me cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
}
