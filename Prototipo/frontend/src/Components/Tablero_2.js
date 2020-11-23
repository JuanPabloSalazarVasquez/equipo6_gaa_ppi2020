import React from "react";
import "../Styles/Tablero.css";

import "../Global.css";

export default function Tablero_2() {
  return (
    <div className="Tablero_2">
      <div className="separador"></div>

      <div className="fondo">
        <div className="item">
          <button>Tarea 1</button>
          <img src="./img/basurita.png" alt="Basura" className="basura" />
        </div>

        <div className="item">
          <button>Tarea 2</button>
          <img src="./img/basurita.png" alt="Basura" className="basura" />
        </div>

        <img className="btn_añadir" src="./img/añadir.jpg" alt="añadir" />
      </div>
    </div>
  );
}
