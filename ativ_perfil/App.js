import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

const themeColors = {
  background: '#061426',
  card: '#0b1b33',
  border: '#15304f',
  header: '#08284d',
  active: '#7c86ff',
  inactive: '#94a3b8',
  text: '#e2e8f0',
  tabBar: '#071225',
};

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          primary: themeColors.active,
          background: themeColors.background,
          card: themeColors.card,
          text: themeColors.text,
          border: themeColors.border,
          notification: '#60a5fa',
        },
      }}
    >
      <Tab.Navigator
        initialRouteName="Perfil"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: themeColors.header },
          headerTintColor: themeColors.text,
          tabBarActiveTintColor: themeColors.active,
          tabBarInactiveTintColor: themeColors.inactive,
          tabBarStyle: {
            backgroundColor: themeColors.tabBar,
            borderTopColor: themeColors.border,
            height: 68,
            paddingBottom: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
          },
          tabBarIcon: ({ color, size }) => {
            let emoji;
            if (route.name === 'Perfil') {
              emoji = '👤';
            } else if (route.name === 'Habilidades') {
              emoji = '⭐';
            } else if (route.name === 'Projetos') {
              emoji = '💼';
            }
            return (
              <Text style={{ color, fontSize: size, lineHeight: size }}>{emoji}</Text>
            );
          },
        })}
      >
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
        <Tab.Screen name="Projetos" component={ProjetosScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
