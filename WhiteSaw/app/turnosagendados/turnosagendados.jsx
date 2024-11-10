import React from 'react';
import { TurnosAgendadosStyles } from './turnosagendados_style';

const TurnosAgendados = () => {
  // Array de días de la semana
  const diasSemana = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];
  
  // Datos de ejemplo para los motivos
  const motivos = [
    { id: 1, nombre: 'Name', descripcion: 'Description' },
    { id: 2, nombre: 'Name', descripcion: 'Description' },
    { id: 3, nombre: 'Name', descripcion: 'Description' },
    { id: 4, nombre: 'Name', descripcion: 'Description' },
    { id: 5, nombre: 'Name', descripcion: 'Description' },
    { id: 6, nombre: 'Name', descripcion: 'Description' },
    { id: 7, nombre: 'Name', descripcion: 'Description' },
    { id: 8, nombre: 'Name', descripcion: 'Description' },
    { id: 9, nombre: 'Name', descripcion: 'Description' },
  ];

  return (
    <div style={TurnosAgendadosStyles.container}>
      <header style={TurnosAgendadosStyles.header}>
        <div style={TurnosAgendadosStyles.logo}>Asesoría E.P.E.T N°20</div>
        <nav style={TurnosAgendadosStyles.nav}>
          <a href="#inicio">Inicio</a>
          <a href="#turnero">Turnero</a>
          <a href="#turnos">Turnos Vigentes</a>
          <button style={TurnosAgendadosStyles.registerBtn}>Registrarse</button>
        </nav>
      </header>

      <h1 style={TurnosAgendadosStyles.title}>Calendario de Turnos</h1>
      
      <div style={TurnosAgendadosStyles.calendarioContainer}>
        <div style={TurnosAgendadosStyles.mesAnio}>
          <h2>Noviembre 2023</h2>
        </div>

        <div style={TurnosAgendadosStyles.calendario}>
          <div style={TurnosAgendadosStyles.diasSemana}>
            {diasSemana.map(dia => (
              <div key={dia} style={TurnosAgendadosStyles.diaSemana}>{dia}</div>
            ))}
          </div>

          <div style={TurnosAgendadosStyles.dias}>
            {/* Aquí irían los días del mes */}
            {/* Por simplicidad, solo mostramos la estructura */}
            {Array(35).fill(null).map((_, index) => (
              <div key={index} style={TurnosAgendadosStyles.dia}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div style={TurnosAgendadosStyles.turnosContainer}>
          <h3>Motivos:</h3>
          <div style={TurnosAgendadosStyles.motivosGrid}>
            {motivos.map(motivo => (
              <div key={motivo.id} style={TurnosAgendadosStyles.motivoCard}>
                <div style={TurnosAgendadosStyles.avatarContainer}>
                  <div style={TurnosAgendadosStyles.avatar}></div>
                </div>
                <div style={TurnosAgendadosStyles.motivoInfo}>
                  <h4>{motivo.nombre}</h4>
                  <p>{motivo.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnosAgendados;
