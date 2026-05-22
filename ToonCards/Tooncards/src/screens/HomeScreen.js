import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { categories, universes } from '../data/mockData';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const renderCategory = ({ item }) => {
    const isActive = item === activeCategory;
    return (
      <TouchableOpacity 
        style={[styles.categoryBtn, isActive && styles.categoryBtnActive]}
        onPress={() => setActiveCategory(item)}
      >
        <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderUniverse = ({ item }) => (
    <TouchableOpacity 
      style={styles.universeCard}
      onPress={() => navigation.navigate('Universe', { universe: item })}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.universeImage} resizeMode="contain" />
      </View>
      <View style={styles.universeInfo}>
        <Text style={styles.universeName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const currentUniverses = universes[activeCategory] || [];

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>
      
      <FlatList
        data={currentUniverses}
        renderItem={renderUniverse}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.universeList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navContainer: {
    paddingVertical: 15,
  },
  categoryList: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  categoryBtnActive: {
    backgroundColor: colors.primary,
    ...colors.neonShadow,
  },
  categoryText: {
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  categoryTextActive: {
    color: colors.background,
  },
  universeList: {
    padding: 20,
    gap: 20,
  },
  universeCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#0a101f',
    padding: 20,
  },
  universeImage: {
    width: '100%',
    height: '100%',
  },
  universeInfo: {
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.primary,
  },
  universeName: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
