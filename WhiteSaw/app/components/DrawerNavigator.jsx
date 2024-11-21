import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeatherIcon from 'feather-icons-react';

import InicioAdmin from '../inicioadmin/inicioadmin';
import LoginAdmin from '../loginadmin/loginadmin';
import TurnosAgendados from '../turnosagendados/turnosagendados';
import Turnero from '../turnero/turnero';
import Register from '../register/register';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: 'usuario@ejemplo.com',
    avatar: 'user', // Cambia esto por la URL de la imagen del avatar si es necesario
  });

  return (
    <View style={styles.container}>
      {/* Botón de cierre */}
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => props.navigation.closeDrawer()}
      >
        <FeatherIcon icon="x" size={24} color="#666" />
      </TouchableOpacity>

      {/* Header del Drawer con avatar y correo */}
      <View style={styles.userSection}>
        <View style={styles.avatarContainer}>
          <FeatherIcon icon={userInfo.avatar} size={60} color="#666" />
        </View>
        <Text style={styles.emailText}>{userInfo.email}</Text>
      </View>

      {/* Opciones del menú */}
      <View style={styles.menuOptions}>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('InicioAdmin')}>
          <FeatherIcon icon="home" size={24} color="#666" />
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('Turnero')}>
          <FeatherIcon icon="check-circle" size={24} color="#666" />
          <Text style={styles.menuText}>Turnero</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('TurnosAgendados')}>
          <FeatherIcon icon="calendar" size={24} color="#666" />
          <Text style={styles.menuText}>Turnos Agendados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('Register')}>
          <FeatherIcon icon="user-plus" size={24} color="#666" />
          <Text style={styles.menuText}>Regitrate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('LoginAdmin')}>
          <FeatherIcon icon="log-in" size={24} color="#666" />
          <Text style={styles.menuText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 1,
  },
  userSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emailText: {
    color: '#666',
    fontSize: 14,
  },
  menuOptions: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
});

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="InicioAdmin"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="InicioAdmin" 
        component={InicioAdmin}
        options={{ title: '' }}
      />
      <Drawer.Screen 
        name="Turnero" 
        component={Turnero}
        options={{ title: 'Turnero' }} 
      />
      <Drawer.Screen 
        name="TurnosAgendados" 
        component={TurnosAgendados}
        options={{ title: '' }}
      />
      <Drawer.Screen 
        name="LoginAdmin" 
        component={LoginAdmin}
        options={{
          headerShown: false,
          swipeEnabled: false,
          drawerItemStyle: { display: 'none' }
        }}
      />
      <Drawer.Screen 
        name="Register" 
        component={Register}
        options={{
          headerShown: false,
          swipeEnabled: false,
          drawerItemStyle: { display: 'none' }
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator; 