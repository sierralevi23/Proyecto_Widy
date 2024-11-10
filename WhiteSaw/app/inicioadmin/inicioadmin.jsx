import React from 'react';
import { InicioAdminStyles } from './inicioadmin_style.jsx';

const InicioAdmin = () => {
  const asesores = [
    { nombre: 'Karina (Turno Mañana)' },
    { nombre: 'El Cuervo (Turno Tarde)' },
    { nombre: 'Josefina (Turno Vespertino)' },
    { nombre: 'Feature' },
    { nombre: 'Feature' }
  ];

  const profesores = [
    { nombre: 'Ezequiel Wiedermann' },
    { nombre: 'Sebastian Collien' },
    { nombre: 'Christian Cantero' },
    { nombre: 'Roque' },
    { nombre: 'Feature' }
  ];

  return (
    <div style={InicioAdminStyles.container}>
      <header style={InicioAdminStyles.header}>
        <div style={InicioAdminStyles.logo}>Asesoría E.P.E.T N°20</div>
        <nav style={InicioAdminStyles.nav}>
          <a href="#turnero">Turnero</a>
          <a href="#turnos">Turnos Vigentes</a>
          <button style={InicioAdminStyles.registerBtn}>Registrarse</button>
        </nav>
      </header>

      <main style={InicioAdminStyles.mainContent}>
        <div style={InicioAdminStyles.leftSection}>
          <h1>Inicio</h1>
          
          <section style={InicioAdminStyles.noticias}>
            <h2>Noticias de la Asesoría</h2>
            <p>acá se van a poner las noticias que los asesores quieran poner. Por ejemplo:</p>
            <p>"Hoy las asesora Karina no va venir y se cancelan sus citas antes previstas"</p>
          </section>

          <section style={InicioAdminStyles.paginasInteres}>
            <h2>Paginas de Interes</h2>
            <div style={InicioAdminStyles.accordion}>
              <div style={InicioAdminStyles.accordionItem}>
                <h3>Página de la EPET N°20 +</h3>
                <p>Para buscar más información de la escuela, ingrese al link: https://epet20.com.ar</p>
              </div>
              <div style={InicioAdminStyles.accordionItem}>
                <h3>Sacar turno con el Asesor Pedagógico +</h3>
              </div>
              <div style={InicioAdminStyles.accordionItem}>
                <h3>Ya tenías turno? +</h3>
              </div>
            </div>
          </section>
        </div>

        <div style={InicioAdminStyles.rightSection}>
          <section style={InicioAdminStyles.asesores}>
            <h2>Asesores Pedagógicos</h2>
            <ul style={InicioAdminStyles.list}>
              {asesores.map((asesor, index) => (
                <li key={index}>{asesor.nombre}</li>
              ))}
            </ul>
            <button style={InicioAdminStyles.verMasBtn}>Ver más</button>
          </section>

          <section style={InicioAdminStyles.profesores}>
            <h2>Profesores</h2>
            <ul style={InicioAdminStyles.list}>
              {profesores.map((profesor, index) => (
                <li key={index}>{profesor.nombre}</li>
              ))}
            </ul>
            <button style={InicioAdminStyles.verMasBtn}>Ver más</button>
          </section>
        </div>
      </main>

      <footer style={InicioAdminStyles.footer}>
        <div style={InicioAdminStyles.socialLinks}>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">Instagram</a>
        </div>
        <div style={InicioAdminStyles.footerPages}>
          <div>
            <p>Site name</p>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div>
            <p>Topic</p>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div>
            <p>Topic</p>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div>
            <p>Topic</p>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InicioAdmin;