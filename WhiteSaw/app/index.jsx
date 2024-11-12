import '@expo/metro-runtime';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './components/DrawerNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator 
      initialRouteName="DrawerNavigator"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="DrawerNavigator" 
        component={DrawerNavigator} 
      />
    </Stack.Navigator>
  );
}

export default App;