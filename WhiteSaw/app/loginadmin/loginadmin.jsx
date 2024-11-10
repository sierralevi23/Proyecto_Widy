import React, { useState } from 'react';
import { LoginAdminStyles } from './loginadmin_style';

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div style={LoginAdminStyles.registroContainer}>
      <h2 style={LoginAdminStyles.titulo}>Registrate</h2>
      <p style={LoginAdminStyles.subtitulo}>Ingresa tu email y contraseña para registrarse</p>

      <form onSubmit={handleSubmit}>
        <div style={LoginAdminStyles.formGroup}>
          <input
            style={LoginAdminStyles.input}
            type="email"
            name="email"
            placeholder="E-mail..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={LoginAdminStyles.formGroup}>
          <input
            style={LoginAdminStyles.input}
            type="password"
            name="password"
            placeholder="Contraseña..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={LoginAdminStyles.registroBtn}>
          Registrarse
        </button>

        <div style={LoginAdminStyles.loginLinks}>
          <a href="#" style={LoginAdminStyles.yaRegistrado}>¿ya estas registrado?</a>
        </div>

        <div style={LoginAdminStyles.googleBtn}>
          <button type="button" style={LoginAdminStyles.googleLoginBtn}>
            <img src="/google-icon.png" alt="Google" style={LoginAdminStyles.googleIcon} />
            Google
          </button>
        </div>

        <div style={LoginAdminStyles.terms}>
          <p>
            By clicking continue, you agree to our{' '}
            <a href="#" style={LoginAdminStyles.termsLink}>Terms of Service</a> and{' '}
            <a href="#" style={LoginAdminStyles.termsLink}>Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginAdmin;
