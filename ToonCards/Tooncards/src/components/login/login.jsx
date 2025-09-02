import React from "react";
import { View, Text, TextInput, Pressable, Image, TouchableOpacity } from "react-native";
import { styles } from "./login.styles";
import { Colors } from "../../styles/colors";

export function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgEl}
        source ={require("../../../assets/inicio.png")}
      />


      <View style={styles.boxLogin} >
        {/* <Text style={styles.title}>Login</Text> */}
        <TextInput style={styles.formImput} 
          placeholder="Email"
          placeholderTextColor={Colors.segundaMaisEscura}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <TextInput style={styles.formImput}
          placeholder="Password"
          placeholderTextColor={Colors.segundaMaisEscura}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.formBtn}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>

        <View style={styles.boxForgotRegister}>
          <TouchableOpacity>
            <Text style={styles.texForgotRegister}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.texForgotRegister}>Quero me cadastrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.alternativo}>Ou entre com</Text>
        <View style={styles.boxSocialMidia}>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source ={require("../../../assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source ={require("../../../assets/github.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              style={styles.icons}
              source ={require("../../../assets/facebook.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
