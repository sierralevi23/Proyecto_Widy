import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FeatherIcon from 'feather-icons-react';
import { TurnosAgendadosStyles } from './turnosagendados_style';

const TurnosAgendados = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date(2024, 2, 1));

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const formatMonthYear = (date) => {
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

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

      {/* Header fijo 
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
      </View>*/}

      {/* Contenido scrolleable */}
      <ScrollView 
        style={TurnosAgendadosStyles.scrollView}
        showsVerticalScrollIndicator={true}
      >
        <View style={TurnosAgendadosStyles.content}>
          <Text style={TurnosAgendadosStyles.title}>Turnos Agendados</Text>

          <View style={TurnosAgendadosStyles.calendarioContainer}>
            <View style={TurnosAgendadosStyles.mesAnio}>
              <TouchableOpacity onPress={handlePrevMonth}>
                <FeatherIcon icon="chevron-left" size={24} />
              </TouchableOpacity>
              <Text style={TurnosAgendadosStyles.mesAnioText}>
                {formatMonthYear(currentDate)}
              </Text>
              <TouchableOpacity onPress={handleNextMonth}>
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
                {/* Agregar espacios vacíos para el primer día del mes */}
                {[...Array(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay())].map((_, index) => (
                  <View key={`empty-${index}`} style={TurnosAgendadosStyles.dia}>
                    <Text> </Text>
                  </View>
                ))}

                {/* Renderizar los días del mes */}
                {[...Array(new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  0
                ).getDate())].map((_, index) => {
                  const fecha = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    index + 1
                  );
                  const dia = fecha.getDay();
                  const esFinDeSemana = dia === 0 || dia === 6;

                  return (
                    <View key={`day-${index}`} style={[
                      TurnosAgendadosStyles.dia,
                      esFinDeSemana && TurnosAgendadosStyles.diaInactivo
                    ]}>
                      <Text>{index + 1}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TurnosAgendados;
