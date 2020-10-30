import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import "../Styles/Calendario.css"

export default function Calendario_Ver() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="Calendario">
    <div className="contenedor">
    <Calendar
      onChange={onChange}
      value={value.date}
      className="react-calendar"
    />
    <Link to="/Ver_Tarea"> <button className="boton">Ok</button> </Link>
    </div>
    </div>
  );
}