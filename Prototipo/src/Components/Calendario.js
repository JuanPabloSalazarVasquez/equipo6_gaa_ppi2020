import React from "react";
import "../Styles/Calendario.css";

import "../Global.css";

export default function Calendario() {
  return (
    <div className="Calendario">
      <div className="separador"></div>

      <div className="contenedor">
        <div className="calendario_img center_txt">
          <img
            src="./img/calendario.png"
            alt="Calendario"
          />
        </div>

        <div className="center_txt">
          <button> OK </button>
        </div>
      </div>
    </div>
  );
}
