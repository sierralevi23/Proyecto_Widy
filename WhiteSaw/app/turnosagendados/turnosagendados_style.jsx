export const TurnosAgendadosStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },

  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },

  registerBtn: {
    backgroundColor: '#000',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },

  calendarioContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },

  mesAnio: {
    textAlign: 'center',
    marginBottom: '20px',
  },

  calendario: {
    border: '1px solid #ddd',
    borderRadius: '4px',
  },

  diasSemana: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    borderBottom: '1px solid #ddd',
  },

  diaSemana: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dias: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
  },

  dia: {
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    minHeight: '80px',
  },

  turnosContainer: {
    marginTop: '40px',
  },

  motivosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },

  motivoCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    gap: '15px',
  },

  avatarContainer: {
    width: '40px',
    height: '40px',
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#ddd',
  },

  motivoInfo: {
    flex: 1,
  },
};

export default TurnosAgendadosStyles;
