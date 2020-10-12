import React from "react";
import "../Styles/Tablero.css";

import "../Global.css";

export default function Tablero() {
  return (
    <div className="Tablero">
      <div className="separador"></div>

      <div className="fondo">
        <div className="item">
          <button>Tarea 1</button>
          <img src="./img/basurita.png" alt="Basura" className="basura" />
        </div>

        <img className="btn_añadir" src="./img/añadir.jpg" alt="añadir" />
      </div>
    </div>
  );
}
