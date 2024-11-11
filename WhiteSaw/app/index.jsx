import '@expo/metro-runtime';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import FeatherIcon from 'feather-icons-react';

import InicioAdmin from './inicioadmin/inicioadmin';
import LoginAdmin from './loginadmin/loginadmin';
import TurnosAgendados from './turnosagendados/turnosagendados';
import MenuHamburguesa from './components/MenuHamburguesa';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeader = ({ navigation }) => (
  <View style={{
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }}>
    <MenuHamburguesa onPress={() => navigation.openDrawer()} />
  </View>
);

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="InicioAdmin"
      screenOptions={({ navigation }) => ({
        header: () => <CustomHeader navigation={navigation} />,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        drawerLabelStyle: {
          color: '#000',
        },
      })}
    >
      <Drawer.Screen 
        name="InicioAdmin" 
        component={InicioAdmin}
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <FeatherIcon icon="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="TurnosAgendados" 
        component={TurnosAgendados}
        options={{
          drawerLabel: 'Turnos Agendados',
          drawerIcon: ({ color, size }) => (
            <FeatherIcon icon="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="LoginAdmin" 
        component={LoginAdmin}
        options={{
          drawerLabel: 'Cerrar Sesión',
          drawerIcon: ({ color, size }) => (
            <FeatherIcon icon="log-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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