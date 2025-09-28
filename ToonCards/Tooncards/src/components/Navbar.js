import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Navbar({ navigation, current }) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <TouchableOpacity
          style={[styles.button, current === 'Home' && styles.active]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.text}>Dragon Ball</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, current === 'Naruto' && styles.active]}
          onPress={() => navigation.navigate('Naruto')}
        >
          <Text style={styles.text}>Naruto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, current === 'OnePiece' && styles.active]}
          onPress={() => navigation.navigate('OnePiece')}
        >
          <Text style={styles.text}>OnePiece</Text>
        </TouchableOpacity>
        {/* Exemplo de mais botões para testar scroll */}
        <TouchableOpacity
          style={[styles.button, current === 'Bleach' && styles.active]}
          onPress={() => navigation.navigate('Bleach')}
        >
          <Text style={styles.text}>Bleach</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#27292C',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    position: 'absolute',
    paddingTop: 30,
    paddingBottom: 30,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: '#FFD700',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
