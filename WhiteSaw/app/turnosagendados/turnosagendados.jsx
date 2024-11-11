import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FeatherIcon from 'feather-icons-react';
import { TurnosAgendadosStyles } from './turnosagendados_style';

const TurnosAgendados = () => {
  return (
    <View style={TurnosAgendadosStyles.container}>
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
      <View style={TurnosAgendadosStyles.header}>
        <Text style={TurnosAgendadosStyles.headerTitle}>Asesoría E.P.E.T N°20</Text>
        <View style={TurnosAgendadosStyles.headerButtons}>
          <TouchableOpacity>
            <Text style={TurnosAgendadosStyles.headerLink}>Turnero</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={TurnosAgendadosStyles.headerLink}>Turnos Vigentes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={TurnosAgendadosStyles.registerBtn}>
            <Text style={TurnosAgendadosStyles.registerBtnText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido scrolleable */}
      <ScrollView 
        style={TurnosAgendadosStyles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={TurnosAgendadosStyles.content}>
          <Text style={TurnosAgendadosStyles.title}>Turnos Agendados</Text>

          <View style={TurnosAgendadosStyles.calendarioContainer}>
            <View style={TurnosAgendadosStyles.mesAnio}>
              <TouchableOpacity>
                <FeatherIcon icon="chevron-left" size={24} />
              </TouchableOpacity>
              <Text style={TurnosAgendadosStyles.mesAnioText}>Marzo 2024</Text>
              <TouchableOpacity>
                <FeatherIcon icon="chevron-right" size={24} />
              </TouchableOpacity>
            </View>

            <View style={TurnosAgendadosStyles.calendario}>
              <View style={TurnosAgendadosStyles.diasSemana}>
                <Text style={TurnosAgendadosStyles.diaSemana}>Dom</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Lun</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Mar</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Mié</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Jue</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Vie</Text>
                <Text style={TurnosAgendadosStyles.diaSemana}>Sáb</Text>
              </View>

              <View style={TurnosAgendadosStyles.dias}>
                {/* Ejemplo de días del calendario */}
                {[...Array(31)].map((_, index) => (
                  <View key={index} style={TurnosAgendadosStyles.dia}>
                    <Text>{index + 1}</Text>
                    {/* Aquí puedes agregar los turnos para cada día */}
                    <View style={TurnosAgendadosStyles.turnosDelDia}>
                      <Text style={TurnosAgendadosStyles.turno}>9:00 - Karina</Text>
                      <Text style={TurnosAgendadosStyles.turno}>11:30 - El Cuervo</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TurnosAgendados;
