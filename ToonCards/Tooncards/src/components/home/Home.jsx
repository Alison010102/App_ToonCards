import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HomeStyle } from '../home/homeStyle'
import { StatusBar } from 'expo-status-bar'

// Você pode remover o 'HomeStyle' se não for usá-lo ou se for simples
// Por exemplo: const styles = { container: { flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' } }

const Home = () => {
  // Estado para armazenar os dados do personagem
  const [characterData, setCharacterData] = useState(null);
  // Estado para controlar o ID do personagem atual (começa com Goku - ID 1)
  const [characterId, setCharacterId] = useState(1);
  // Estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);
  // Estado para controlar erros
  const [error, setError] = useState(null);

  // A função fetch agora é extraída para ser chamada no useEffect E ao trocar de personagem
  const fetchCharacter = async (id) => {
    setIsLoading(true); // Começa a carregar
    setError(null); // Limpa erros anteriores
    setCharacterData(null); // Limpa dados anteriores

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
      setIsLoading(false); // Termina de carregar
    }
  };

  // useEffect que chama a função de busca sempre que characterId mudar
  useEffect(() => {
    fetchCharacter(characterId);
  }, [characterId]); // O array de dependências garante que ele roda na montagem E na mudança do ID


  // Função para buscar o próximo personagem
  const goToNextCharacter = () => {
    // Você pode definir um limite superior ou simplesmente incrementar.
    // Vou colocar um limite arbitrário de 15 para este exemplo.
    const newId = characterId < 15 ? characterId + 1 : 1;
    setCharacterId(newId);
  };
  
  // Função para buscar o personagem anterior
  const goToPreviousCharacter = () => {
    // Para evitar ID 0 ou negativo, volta para o limite superior (5)
    const newId = characterId > 1 ? characterId - 1 : 5;
    setCharacterId(newId);
  };


  return (
    <View style={HomeStyle.container || { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <StatusBar style="light" />

      
      
      {/* Indicador de Carregamento */}
      {isLoading && <ActivityIndicator size="large" color="#FFD700" style={{ marginVertical: 20 }} />}

      {/* Exibição de Erro */}
      {error && <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>}

      {/* Exibição da Imagem e Dados */}
      {characterData && !isLoading && (
        <>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FFD700', marginBottom: 10 }}>
            {characterData.name}
          </Text>
          {/* Componente Image para exibir a imagem */}
          <Image
            source={{ uri: characterData.image }}
            style={{  width: 300, height: 400, borderRadius: 30, marginBottom: 20, borderWidth: 3, borderColor: '#fff' }}
            resizeMode="contain"
          />
          <Text style={{ color: 'white', textAlign: 'center' }}>
            **Raça:** {characterData.race} | **Gênero:** {characterData.gender}
          </Text>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, paddingHorizontal: 10 }}>
            **Ki:** {characterData.ki}
          </Text>
          
          {/* Se você ainda quiser ver o JSON completo, descomente abaixo */}
          {/* <Text style={{ color: 'white', marginTop: 20, fontSize: 12 }}>
            {JSON.stringify(characterData, null, 2)}
          </Text> */}
        </>
      )}

      {/* Botões de Navegação */}
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
  )
}

export default Home