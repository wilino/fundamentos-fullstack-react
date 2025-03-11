import React from "react";
import ReactDOM from "react-dom/client"; // Importa createRoot en lugar de render
import "./index.css"; // Importamos los estilos globales
import App from "./App"; // Importamos el componente principal

// Obtener el elemento root del DOM
const rootElement = document.getElementById("root");

// Crear la raíz y renderizar la app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);