import React from "react";
import "../Styles/Recordatorio.css";
import { InputGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'

import "../Global.css";

export default function Recordatorio() {
  return (
    <div className="Recordatorio">

      <h1> Recordatorio </h1>

      <div className="contenedor">
      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" className="input" />
        <h3>Nada</h3>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" className="input" />
        <h3> Minutos</h3>
        <p> 30 </p>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" className="input" />
        <h3> Horas </h3>
        <p> 12 </p>
      </div>

      <div className="item">
        <InputGroup.Radio aria-label="Radio button for following text input" className="input" />
        <h3> Días </h3>
        <p> 1 </p>
      </div>

      <Link to="/Tablero_2"> <button> Agregar Tarea </button> </Link>
      </div>
    </div>
  );
}