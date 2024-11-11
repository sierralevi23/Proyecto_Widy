export const TurnosAgendadosStyles = {
  container: {
    flex: 1,
  },
  
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(221, 221, 221, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    backdropFilter: 'blur(5px)',
  },
  
  scrollView: {
    flex: 1,
  },
  
  content: {
    padding: 20,
  },
  
  calendarioContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backdropFilter: 'blur(5px)',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  
  mesAnio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  mesAnioText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  
  calendario: {
    borderWidth: 1,
    borderColor: 'rgba(221, 221, 221, 0.5)',
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  
  diasSemana: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(221, 221, 221, 0.5)',
    backgroundColor: 'rgba(248, 248, 248, 0.9)',
  },
  
  diaSemana: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  
  dias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  dia: {
    width: `${100/7}%`,
    padding: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(221, 221, 221, 0.5)',
    minHeight: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  
  turnosDelDia: {
    marginTop: 5,
  },
  
  turno: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 4,
    borderRadius: 4,
  },
  
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  
  registerBtn: {
    backgroundColor: '#000',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  
  registerBtnText: {
    color: '#fff',
  },
  
  headerLink: {
    color: '#000',
    fontWeight: '500',
  },
};

export default TurnosAgendadosStyles;
