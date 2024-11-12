import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InicioAdminStyles } from './inicioadmin_style';

const InicioAdmin = () => {
  return (
    <View style={InicioAdminStyles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#FF758C', '#DE6EFD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      
      {/* Header fijo */}
      {/*<View style={InicioAdminStyles.header}>
        <Text style={InicioAdminStyles.headerTitle}>Asesoría E.P.E.T N°20</Text>
        <View style={InicioAdminStyles.headerButtons}>
          <TouchableOpacity>
            <Text style={InicioAdminStyles.headerLink}>Turnero</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={InicioAdminStyles.headerLink}>Turnos Vigentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={InicioAdminStyles.registerBtn}>
            <Text style={InicioAdminStyles.registerBtnText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>*/}

      {/* Contenido scrolleable */}
      <ScrollView 
        style={InicioAdminStyles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={InicioAdminStyles.content}>
          <View style={InicioAdminStyles.leftColumn}>
            <Text style={InicioAdminStyles.title}>Inicio</Text>
            
            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Noticias de la Asesoría</Text>
              <Text>acá se van a poner las noticias que los asesores quieran poner. Por ejemplo:</Text>
              <Text>"Hoy las asesora Karina no va venir y se cancelan sus citas antes previstas"</Text>
            </View>

            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Información de Interes</Text>
              <View style={InicioAdminStyles.card}>
                <Text style={InicioAdminStyles.cardTitle}>Página de la EPET N°20 +</Text>
                <Text>Para buscar más información de la escuela, ingrese al link:</Text>
                <Text style={InicioAdminStyles.link}>https://epet20.com.ar</Text>
              </View>
              
              <View style={InicioAdminStyles.card}>
                <Text style={InicioAdminStyles.cardTitle}>Sacar turno con el Asesor Pedagógico +</Text>
              </View>
              
              <View style={InicioAdminStyles.card}>
                <Text style={InicioAdminStyles.cardTitle}>¿Ya tenías turno? +</Text>
              </View>
            </View>
          </View>

          <View style={InicioAdminStyles.rightColumn}>
            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Asesores Pedagógicos</Text>
              <Text>Karina (Turno Mañana)</Text>
              <Text>El Cuervo (Turno Tarde)</Text>
              <Text>Josefina (Turno Vespertino)</Text>
              <TouchableOpacity style={InicioAdminStyles.verMasBtn}>
                <Text style={InicioAdminStyles.verMasText}>Ver más</Text>
              </TouchableOpacity>
            </View>

            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Profesores</Text>
              <Text>Exequiel Wiedermann</Text>
              <Text>Sebastian Colillan</Text>
              <Text>Christian Cantero</Text>
              <Text>Roque</Text>
              <TouchableOpacity style={InicioAdminStyles.verMasBtn}>
                <Text style={InicioAdminStyles.verMasText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InicioAdmin;