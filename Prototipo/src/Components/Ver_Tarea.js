import React from "react";
import "../Styles/Ver_Tarea.css";
import "../Global.css";

export default function Ver_Tarea() {
  return (
    <div className="Ver_Tarea">
      <div className="separador"></div>

      <h1> Ver tarea </h1>
      
      <div className="contenedor">
        <h4> Título </h4>
        <p> Tarea 1 </p>

        <div className="Rayita"></div>

        <h3>Descripción </h3>
        <div className="text">
          <p>Esta es una tarea de prueba. Está aqui para mostrar cómo se vería una vez creada.</p>
          <p className="caracteres_restantes">500</p>
        </div>

        <div className="Botones center_txt">
          <div className="Botones1">
            <button>Fecha límite</button>{" "}
            <button>Recordatorio</button>{" "}
          </div>
          <button>Continuar</button>{" "}
        </div>
      </div>
    </div>
  );
}
