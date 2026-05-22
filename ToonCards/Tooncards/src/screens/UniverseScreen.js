import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { characters } from '../data/mockData';
import { colors } from '../theme/colors';

export default function UniverseScreen({ route, navigation }) {
  const { universe } = route.params;
  const universeCharacters = characters[universe.name] || [];

  const renderCharacter = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.characterCard}
      onPress={() => navigation.navigate('Character', { 
        character: item,
        universeCharacters: universeCharacters,
        currentIndex: index
      })}
    >
      <Image source={{ uri: item.image }} style={styles.characterImage} resizeMode="cover" />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
        <Text style={styles.characterRace}>{item.race}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {universeCharacters.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum personagem encontrado neste universo.</Text>
        </View>
      ) : (
        <FlatList
          data={universeCharacters}
          renderItem={renderCharacter}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  characterCard: {
    width: '48%',
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  characterImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#0a101f',
  },
  characterInfo: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  },
  characterName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  characterRace: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 16,
  }
});
