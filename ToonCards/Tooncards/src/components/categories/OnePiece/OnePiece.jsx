import React from 'react';
import { View, Text } from 'react-native';
import { OnePieceStyle } from './onePieceStyle'; // Certifique-se de criar esse arquivo corretamente
import Navbar from '../../Navbar';

export default function OnePiece({ navigation }) {
  return (
    <View style={OnePieceStyle.container}>
      
      <Navbar navigation={navigation} current="OnePiece" />

      <View style={OnePieceStyle.content}>
        <Text style={OnePieceStyle.title}>Personagens de One Piece</Text>
      </View>
    </View>
  );
}
