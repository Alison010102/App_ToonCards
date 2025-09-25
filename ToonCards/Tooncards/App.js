import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/splashScreen/SplashScreen";
import { Login } from "./src/components/login/login";
import WelcomeScreen from "./src/screens/welcomeScreen/WelcomeScreen";
import SingUpScreen from "./src/screens/singUpscreen/SingUpScreen";
import { StatusBar } from "expo-status-bar";
import Home from "./src/components/home/Home";
import HomeStack from "./src/routes";



export default function App() {
  return (
    <HomeStack />
  );
}
