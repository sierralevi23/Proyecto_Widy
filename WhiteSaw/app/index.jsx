import '@expo/metro-runtime';
import { App } from 'expo-router/build/qualified-entry';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InicioAdmin from '@/components/inicioadmin/inicioadmin';
import LoginAdmin from '@/components/loginadmin/loginadmin';
import TurnosAgendados from '@/components/turnosagendados/turnosagendados';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InicioAdmin" component={InicioAdmin} />
        <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
        <Stack.Screen name="TurnosAgendados" component={TurnosAgendados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
