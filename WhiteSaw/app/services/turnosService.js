const obtenerTurnos = (fecha) => {
  const dia = fecha.getDay();
  if (dia === 0 || dia === 6) {
    return []; // No devolver turnos para sábados y domingos
  }
  // ... resto del código para obtener turnos
}; 