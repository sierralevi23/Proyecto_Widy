import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeatherIcon from 'feather-icons-react';

import InicioAdmin from '../inicioadmin/inicioadmin';
import LoginAdmin from '../loginadmin/loginadmin';
import TurnosAgendados from '../turnosagendados/turnosagendados';
import MenuHamburguesa from './MenuHamburguesa';

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

const CustomDrawerContent = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => props.navigation.closeDrawer()}
      >
        <FeatherIcon icon="x" size={24} color="#666" />
      </TouchableOpacity>

      <View style={styles.drawerHeader}>
        {/* ... resto del código existente ... */}
      </View>
      
      {/* ... resto del código existente ... */}
    </View>
  );
};

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

export default DrawerNavigator; 