import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from '../../Navbar';
import { NarutoStyle } from './narutoStyle';

const Naruto = ({ navigation }) => {
  const [characterData, setCharacterData] = useState(null);
  const [characterId, setCharacterId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = async (id) => {
    setIsLoading(true);
    setError(null);
    setCharacterData(null);
    try {
      const response = await fetch(`https://naruto-br-api.site/characters/${id}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar personagem: ${response.status}`);
      }
      const json = await response.json();
      setCharacterData(json);
    } catch (err) {
      setError('Falha ao carregar os dados. Verifique o ID.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter(characterId);
  }, [characterId]);

  const goToNextCharacter = () => {
    setCharacterId(prev => (prev < 100 ? prev + 1 : 1)); // limite 100, ajusta se quiser
  };

  const goToPreviousCharacter = () => {
    setCharacterId(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <View style={NarutoStyle.container}>
      <Navbar navigation={navigation} current="Naruto" />

      <ScrollView contentContainerStyle={{ padding: 20, alignItems: 'center' }}>
        <StatusBar style="light" />

        {isLoading && <ActivityIndicator size="large" color="#FFD700" style={{ marginVertical: 20 }} />}

        {error && <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>}

        {characterData && !isLoading && (
          <>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 }}>
              {characterData.name}
            </Text>

            <Image
              source={{ uri: characterData.profile_image || characterData.image }}
              style={{ width: 350, height: 210, borderRadius: 15, marginBottom: 20, borderWidth: 3, borderColor: '#fff' }}
              resizeMode="contain"
            />

            <Text style={{ color: 'white', textAlign: 'center', marginBottom: 10 }}>
              {characterData.village && `Aldeia: ${characterData.village}`}
            </Text>

            <Text style={{ color: 'white', textAlign: 'justify', paddingHorizontal: 10 }}>
              {characterData.summary}
            </Text>
          </>
        )}

        <View style={{ flexDirection: 'row', marginTop: 30, width: '80%', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={goToPreviousCharacter}
            disabled={isLoading}
            style={{ backgroundColor: isLoading ? '#555' : '#007AFF', padding: 10, borderRadius: 5 }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{'< Anterior'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToNextCharacter}
            disabled={isLoading}
            style={{ backgroundColor: isLoading ? '#555' : '#FF3B30', padding: 10, borderRadius: 5 }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Próximo >'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Naruto;
