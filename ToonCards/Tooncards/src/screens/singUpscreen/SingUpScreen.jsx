import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../../styles/colors'
import { styles } from '../singUpscreen/singUp'
import { useNavigation } from '@react-navigation/native'

export default function SingUp() {
  const navigation = useNavigation();
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
          <Text style ={ styles.textBtn} onPress={() => navigation.navigate('Home')}>Criar Conta </Text>
        </TouchableOpacity>
    </View>
  )
}
