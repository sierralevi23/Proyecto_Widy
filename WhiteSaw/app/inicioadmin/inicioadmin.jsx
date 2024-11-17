import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InicioAdminStyles } from './inicioadmin_style';

const InicioAdmin = () => {
  const [showAdvisors, setShowAdvisors] = useState(false);
  const [showTeachers, setShowTeachers] = useState(false);
  const [showInfoEPET, setShowInfoEPET] = useState(false);
  const [showInfoAsesor, setShowInfoAsesor] = useState(false);
  const [showInfoTurno, setShowInfoTurno] = useState(false);
  const [newsText, setNewsText] = useState(
    'Informacion a compartir a los usuarios. Por ejemplo: "Hoy la asesora Karina no asistira y se cancelan sus citas antes previstas"'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [showAdvisorsList, setShowAdvisorsList] = useState(false);
  const [showTeachersList, setShowTeachersList] = useState(false);

  const advisors = [
    'Karina (Turno Mañana)',
    'El Cuervo (Turno Tarde)',
    'Josefina (Turno Vespertino)',
    'Nombre Adicional 1',
    'Nombre Adicional 2',
  ];

  const teachers = [
    'Exequiel Wiedermann',
    'Sebastian Colillan',
    'Christian Cantero',
    'Roque',
    'Nombre Adicional 3',
    'Nombre Adicional 4',
  ];

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

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
      
      {/* Contenido scrolleable */}
      <ScrollView 
        style={InicioAdminStyles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={InicioAdminStyles.content}>
          <View style={InicioAdminStyles.leftColumn}>
            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Noticias de la Asesoría</Text>
              <Image
                source={{ uri: 'https://www.rionegro.com.ar/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-03-at-16.06.46.jpeg' }} // Reemplaza con la URL de tu imagen
                style={styles.image}
              />
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={newsText}
                  onChangeText={setNewsText}
                  multiline
                />
              ) : (
                <Text>{newsText}</Text>
              )}
              <TouchableOpacity onPress={handleEditToggle} style={styles.circleButton}>
                <Text style={styles.buttonText}>{isEditing ? '✓' : '+'}</Text>
              </TouchableOpacity>
            </View>

            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Información de Interes</Text>
              <View style={InicioAdminStyles.card}>
                <TouchableOpacity onPress={() => setShowInfoEPET(!showInfoEPET)} style={InicioAdminStyles.verMasBtn}>
                  <Text style={InicioAdminStyles.verMasText}>Página de la EPET N°20</Text>
                </TouchableOpacity>
                {showInfoEPET && (
                  <View style={styles.infoContainer}>
                    <Text>Para buscar más información de la escuela, ingrese al link:</Text>
                    <Text style={styles.link}>https://epet20.com.ar</Text>
                  </View>
                )}
              </View>
              
              <View style={InicioAdminStyles.card}>
                <TouchableOpacity onPress={() => setShowInfoAsesor(!showInfoAsesor)} style={InicioAdminStyles.verMasBtn}>
                  <Text style={InicioAdminStyles.verMasText}>Sacar turno con el Asesor Pedagógico</Text>
                </TouchableOpacity>
                {showInfoAsesor && (
                  <View style={styles.infoContainer}>
                    <Text>Aquí puedes sacar un turno con el asesor pedagógico.</Text>
                  </View>
                )}
              </View>
              
              <View style={InicioAdminStyles.card}>
                <TouchableOpacity onPress={() => setShowInfoTurno(!showInfoTurno)} style={InicioAdminStyles.verMasBtn}>
                  <Text style={InicioAdminStyles.verMasText}>¿Ya tenías turno?</Text>
                </TouchableOpacity>
                {showInfoTurno && (
                  <View style={styles.infoContainer}>
                    <Text>Aquí puedes verificar si ya tenías un turno.</Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={InicioAdminStyles.rightColumn}>
            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Asesores Pedagógicos</Text>
              <Text>Karina (Turno Mañana)</Text>
              <Text>El Cuervo (Turno Tarde)</Text>
              <Text>Josefina (Turno Vespertino)</Text>
              
              {showAdvisorsList && (
                <View>
                  <Text>Nombre Adicional 1</Text>
                  <Text>Nombre Adicional 2</Text>
                </View>
              )}
              
              <TouchableOpacity onPress={() => setShowAdvisorsList(!showAdvisorsList)} style={InicioAdminStyles.verMasBtn}>
                <Text style={InicioAdminStyles.verMasText}>{showAdvisorsList ? 'Ver menos' : 'Ver más'}</Text>
              </TouchableOpacity>
            </View>

            <View style={InicioAdminStyles.section}>
              <Text style={InicioAdminStyles.sectionTitle}>Profesores</Text>
              <Text>Exequiel Wiedermann</Text>
              <Text>Sebastian Colillan</Text>
              <Text>Christian Cantero</Text>
              <Text>Roque</Text>
              
              {showTeachersList && (
                <View>
                  <Text>Nombre Adicional 3</Text>
                  <Text>Nombre Adicional 4</Text>
                </View>
              )}
              
              <TouchableOpacity onPress={() => setShowTeachersList(!showTeachersList)} style={InicioAdminStyles.verMasBtn}>
                <Text style={InicioAdminStyles.verMasText}>{showTeachersList ? 'Ver menos' : 'Ver más'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%', // Ajusta el ancho según sea necesario
    height: 200, // Ajusta la altura según sea necesario
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default InicioAdmin;
