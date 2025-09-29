import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeStyle } from './homeStyle'; // seu estilo importado
import { StatusBar } from 'expo-status-bar';
import Navbar from '../Navbar';  // ajuste o caminho conforme sua estrutura

const Home = ({ navigation }) => {
  const [characterData, setCharacterData] = useState(null);
  const [characterId, setCharacterId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = async (id) => {
    setIsLoading(true);
    setError(null);
    setCharacterData(null);

    try {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar personagem: ${response.status}`);
      }
      const json = await response.json();
      setCharacterData(json);
    } catch (err) {
      console.error(err);
      setError('Falha ao carregar os dados. Verifique o ID.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter(characterId);
  }, [characterId]);

  const goToNextCharacter = () => {
    const newId = characterId < 15 ? characterId + 1 : 1;
    setCharacterId(newId);
  };

  const goToPreviousCharacter = () => {
    const newId = characterId > 1 ? characterId - 1 : 5;
    setCharacterId(newId);
  };

  return (
    <View style={HomeStyle.container}>
      <Navbar navigation={navigation} current="Home" />

      {/* Conteúdo principal com paddingTop para não ficar embaixo da navbar */}
      <View style={{ flex: 1, paddingTop: 60, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
        <StatusBar style="light" />

        {isLoading && <ActivityIndicator size="large" color="#FFD700" style={{ marginVertical: 20 }} />}

        {error && <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>}

        {characterData && !isLoading && (
          <>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 }}>
              {characterData.name}
            </Text>

            <View 
              style={{ 
                borderWidth: 3, 
                borderColor: '#ffffff', 
                borderRadius: 30,
                marginBottom: 20, 
                overflow: 'hidden',
                padding: 10,
                paddingTop: 20,
              }}
            >
              <Image
                source={{ uri: characterData.image }}
                style={{ width: 300, height: 400, borderRadius: 30, marginBottom: 20, padding: 40 }}
                resizeMode="contain"
              />
            </View>

            <Text style={{ color: 'white', textAlign: 'center' }}>
              **Raça:** {characterData.race} | **Gênero:** {characterData.gender}
            </Text>
            <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, paddingHorizontal: 10 }}>
              **Ki:** {characterData.ki}
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
      </View>
    </View>
  );
};

export default Home;
