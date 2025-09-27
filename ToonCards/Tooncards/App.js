import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/home/Home';
import Naruto from './src/components/categories/Naturo/Naruto';
import OnePiece from './src/components/categories/OnePiece/OnePiece';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Naruto" component={Naruto} />
        <Stack.Screen name="OnePiece" component={OnePiece} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
