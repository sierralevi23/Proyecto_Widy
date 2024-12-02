import '@expo/metro-runtime';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './components/DrawerNavigator';
import LoginAdmin from './loginadmin/loginadmin';
import Register from './register/register';
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
      <Stack.Screen 
        name="LoginAdmin" 
        component={LoginAdmin} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
      />
    </Stack.Navigator>
  );
}

export default App;