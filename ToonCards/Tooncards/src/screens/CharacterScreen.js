import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function CharacterScreen({ route, navigation }) {
  const { universeCharacters } = route.params;
  const [currentIndex, setCurrentIndex] = useState(route.params.currentIndex);
  
  const character = universeCharacters[currentIndex];

  const handleNext = () => {
    if (currentIndex < universeCharacters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: character.image }} style={styles.image} resizeMode="contain" />
          <LinearGradient
            colors={['transparent', colors.background]}
            style={styles.gradient}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.universe}>{character.universe}</Text>
          
          <View style={styles.powerContainer}>
            <Text style={styles.powerLabel}>Poder Principal</Text>
            <Text style={styles.powerValue}>{character.power}</Text>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Raça</Text>
              <Text style={styles.detailValue}>{character.race}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Gênero</Text>
              <Text style={styles.detailValue}>{character.gender}</Text>
            </View>
          </View>

          <Text style={styles.summary}>"{character.summary}"</Text>
        </View>
      </ScrollView>

      <View style={styles.navigationButtons}>
        <TouchableOpacity 
          style={[styles.navBtn, currentIndex === 0 && styles.navBtnDisabled]} 
          onPress={handlePrev}
          disabled={currentIndex === 0}
        >
          <Ionicons name="chevron-back" size={24} color={currentIndex === 0 ? '#555' : colors.text} />
          <Text style={[styles.navBtnText, currentIndex === 0 && styles.navBtnTextDisabled]}>Anterior</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navBtn, currentIndex === universeCharacters.length - 1 && styles.navBtnDisabled]} 
          onPress={handleNext}
          disabled={currentIndex === universeCharacters.length - 1}
        >
          <Text style={[styles.navBtnText, currentIndex === universeCharacters.length - 1 && styles.navBtnTextDisabled]}>Próximo</Text>
          <Ionicons name="chevron-forward" size={24} color={currentIndex === universeCharacters.length - 1 ? '#555' : colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Space for navigation buttons
  },
  imageContainer: {
    height: 400,
    width: '100%',
    backgroundColor: '#0a101f',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 40,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    marginTop: -40, // Pull content up slightly over gradient
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  universe: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  powerContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'rgba(252, 163, 17, 0.1)', // primary color with low opacity
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '100%',
    alignItems: 'center',
    ...colors.neonShadow,
  },
  powerLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  powerValue: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    textShadowColor: colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 5,
  },
  detailValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 40,
    fontSize: 18,
    color: colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  navigationButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  navBtnDisabled: {
    borderColor: '#333',
    backgroundColor: '#111',
  },
  navBtnText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 5,
  },
  navBtnTextDisabled: {
    color: '#555',
  }
});
