import React from "react";
import "../Styles/Ver_Tarea.css";
import "../Global.css";
import { Link } from 'react-router-dom'

export default function Ver_Tarea() {
  return (
    <div className="Ver_Tarea">

      <h1> Ver tarea </h1>
      
      <div className="contenedor">
        <h4> Título </h4>
        <p> Tarea 1 </p>

        <div className="Rayita"></div>

        <h3>Descripción </h3>
        <div className="text">
          <p>Esta es una tarea de prueba. Está aqui para mostrar cómo se vería una vez creada.</p>
          <p className="caracteres_restantes">422</p>
        </div>

        <div className="Botones center_txt">
          <div className="Botones1">
            <Link to="/Calendario_Ver"> <button>Fecha límite</button>{" "} </Link>
            <Link to="/Recordatorio_Ver"> <button>Recordatorio</button>{" "} </Link>
          </div>
            <Link to="/Tablero"> <button>Continuar</button>{" "} </Link>
        </div>
      </div>
    </div>
  );
}
