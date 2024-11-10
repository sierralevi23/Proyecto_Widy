export const InicioAdminStyles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    },
    
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    
    nav: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    },
    
    registerBtn: {
      backgroundColor: '#000',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    
    mainContent: {
      display: 'flex',
      gap: '40px'
    },
    
    leftSection: {
      flex: '2'
    },
    
    rightSection: {
      flex: '1'
    },
    
    noticias: {
      marginBottom: '40px'
    },
    
    paginasInteres: {
      marginTop: '30px'
    },
    
    accordion: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    
    accordionItem: {
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '4px'
    },
    
    asesores: {
      marginBottom: '30px'
    },
    
    profesores: {
      marginBottom: '30px'
    },
    
    list: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '20px'
    },
    
    verMasBtn: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#000',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    
    footer: {
      marginTop: '50px',
      borderTop: '1px solid #ddd',
      paddingTop: '30px'
    },
    
    socialLinks: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '30px'
    },
    
    footerPages: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px'
    }
  };

export default InicioAdminStyles;