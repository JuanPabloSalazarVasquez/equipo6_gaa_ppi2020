import React from "react";

import Inicio_Sesion from "../Components/Inicio_Sesion";
import Registro from "../Components/Registro";
import Carga from "../Components/Carga";
import Tablero from "../Components/Tablero";
import Ver_Tarea from "../Components/Ver_Tarea";
import Ingresar_Tarea from "../Components/Ingresar_Tarea";
import Recordatorio from "../Components/Recordatorio";
import Calendario from "../Components/Calendario";
import Inicio from "../Components/Inicio";
import Tablero_2 from "../Components/Tablero_2";


export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <Carga />
      <Inicio />
      <Registro />
      <Inicio_Sesion />
      <Tablero />
      <Ingresar_Tarea />
      <Calendario />
      <Recordatorio />
      <Tablero_2 />
      <Ver_Tarea />
    </div>
  );
}
