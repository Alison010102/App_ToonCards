import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";
import { Login } from "./src/components/login/login";
import WelcomeScreen from "./src/screens/welcomeScreen/WelcomeScreen";
import SingUpScreen from "./src/screens/singUpscreen/SingUpScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="SingUpScreen"
          component={SingUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
