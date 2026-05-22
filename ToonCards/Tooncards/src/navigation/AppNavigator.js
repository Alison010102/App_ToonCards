import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UniverseScreen from '../screens/UniverseScreen';
import CharacterScreen from '../screens/CharacterScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'ToonCards' }} 
        />
        <Stack.Screen 
          name="Universe" 
          component={UniverseScreen} 
          options={({ route }) => ({ title: route.params.universe.name })}
        />
        <Stack.Screen 
          name="Character" 
          component={CharacterScreen} 
          options={{ title: '', headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
