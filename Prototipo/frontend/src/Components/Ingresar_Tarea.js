import React from "react";
import "../Styles/Ingresar_Tarea.css";
import "../Global.css";

export default function Ingresar_Tarea() {
  return (
    <div className="Ingresar_Tarea">
      <div className="separador"></div>

      <h1> Ingresar tarea </h1>

      <div className="contenedor">
        <h4> Título </h4>
        <p> Ingresa el título </p>

        <div className="Rayita"></div>

        <h3>Descripción </h3>
        <div className="text">
          <p className="caracteres_restantes">500</p>
        </div>

        <div className="Botones">
          <button>Continuar</button>
        </div>
      </div>
    </div>
  );
}
