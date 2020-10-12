import React from "react";
import {Link, withRouter} from 'react-router-dom'

import "../Global.css";
import "../Styles/Inicio.css";

const Nav = (props) =>{
  const {history} = (props);
}

export default function Inicio() {
  return (
    <div className="Inicio">
      <div className="separador"></div>

      <div className="titulo center_txt">
        <h1>Organized</h1>
        <h2>Diary</h2>
      </div>
      <div className="botones center_txt">
        <button onClick={()=> history.pushState('/Registro')}>Registrarme</button>
        <br />
        <button>Ya tengo una cuenta</button>
      </div>
    </div>
  );
}