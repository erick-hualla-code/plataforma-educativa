// pages/Login.js

import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-educacion-inteligente_145155-2117.jpg"
          alt="Imagen de fondo"
          className="background-image"
        />
      </div>
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <label htmlFor="institucion">Institución Educativa</label>
        <select id="institucion" name="institucion">
          <option value="institucion1">Institución 1</option>
          <option value="institucion2">Institución 2</option>
          {/* Agrega más opciones de instituciones educativas según sea necesario */}
        </select>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" />
        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" />
        <p className="forgot-password">¿No recuerda su contraseña?</p>
        <button className="login-button">Ingresar</button>
      </div>
    </div>
  );
};

export default Login;
