
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
// 🎯 Importação CORRETA do Ionicons do pacote do Expo
import { Ionicons } from "@expo/vector-icons"; 

// Importações das suas telas/componentes
import SplashScreen from "../screens/splashScreen/SplashScreen";
import { Login } from "../components/login/login";
import WelcomeScreen from "../screens/welcomeScreen/WelcomeScreen";
import SingUpScreen from "../screens/singUpscreen/SingUpScreen";
import Home from "../components/home/Home";
import CardsScreen from "../screens/cardScreen/index"; 
import ProfileScreen from "../screens/profileScreen/index"; 




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- 1. Função para a Navegação por Abas (Bottom Tabs) ---
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF', 
        tabBarInactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          title: 'Home', 
          // ✅ Ionicons agora funciona!
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CardsTab"
        component={CardsScreen}
        options={{
          title: 'Cards',
          // ✅ Ícone adicionado para Cards
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
          // ✅ Ícone adicionado para Perfil
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// -----------------------------------------------------------------


// --- 2. Função Principal (Stack Navigator) ---
function HomeStack() {
    return (
        <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="SplashScreen">
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
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="SingUpScreen"
          component={SingUpScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default HomeStack;