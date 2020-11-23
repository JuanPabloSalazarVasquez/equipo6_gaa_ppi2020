import React, { useState } from "react" ;
import "../Styles/Ingresar_Tarea.css";
import "../Global.css";
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import "../Styles/Calendario.css"
import "../Styles/Recordatorio.css";
import { InputGroup } from "react-bootstrap";


export default function Ingresar_Tarea() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <div className="Ingresar_Tarea">

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
          <Link to="/Calendario"> <button className="btn_continuar">Continuar</button> </Link>
        </div>
      </div>

      <div className="Calendario">
    <div className="contenedor">
    <Calendar
      onChange={onChange}
      value={value.date}
      className="react-calendar"
    />
    <Link to="/Recordatorio"> <button className="boton">Ok</button> </Link>
    </div>
    </div>

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
    </div>
   
   
  );
}
