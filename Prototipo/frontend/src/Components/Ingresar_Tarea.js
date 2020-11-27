import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { InputGroup } from "react-bootstrap";
import Calendar from 'react-calendar';

import "../Global.css";
import "../Styles/Calendario.css"
import "../Styles/Recordatorio.css";
import "../Styles/Ingresar_Tarea.css";

export default function Ingresar_Tarea() {
  /*
    Funciones
  */
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function continuar() {
    var ingresar_tarea = document.getElementById("ingresar_tarea");
    var calendario = document.getElementById("calendario");
    var recordatorio = document.getElementById("recordatorio");
    var i = 0

    if (i == 0) {
      ingresar_tarea.style.display = "none";
      calendario.style.display = "block";
      recordatorio.style.display = "none";

      i++;
    } else if (i == 1) {
      ingresar_tarea.style.display = "none";
      calendario.style.display = "none";
      recordatorio.style.display = "block";
    } else {
      console.log("¡Error!")
    }
  }
  /*
    Funciones
  */

  return (
    <div className="Ingresar_Tarea">
      <div id="ingresar_tarea">
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
            <button className="btn_continuar" onClick={continuar}>Continuar</button>
          </div>
        </div>
      </div>

      <div className="Calendario" id="calendario">
        <div className="contenedor">
          <Calendar
            onChange={onChange}
            value={value.date}
            className="react-calendar"
          />
          <button className="boton" onClick={continuar}>Ok</button>
        </div>
      </div>

      <div className="Recordatorio" id="recordatorio">
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

          <Link to="/Tablero"> <button>Agregar Tarea</button> </Link>
        </div>
      </div>
    </div>
  );
}