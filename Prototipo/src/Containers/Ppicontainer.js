import React from "react";

import Carga from "../Components/Carga";
import Inicio from "../Components/Inicio";
import Inicio_Sesion from "../Components/Inicio_Sesion";
import Registro from "../Components/Registro";
import Tablero from "../Components/Tablero";
import Calendario from "../Components/Calendario";
import Ingresar_Tarea from "../Components/Ingresar_Tarea";
import Recordatorio from "../Components/Recordatorio";
import Ver_Tarea from "../Components/Ver_Tarea";

import Tablero_2 from "../Components/Tablero_2";

//navegación
import {BrowserRouter, Route} from 'react-router-dom'


export default function Ppicontainer() {
  return (

<div>
    <Carga />
    <Inicio />
    <Inicio_Sesion />
    <Registro />
    <Tablero />
    <Calendario />
    <Ingresar_Tarea />
    <Recordatorio />
    <Tablero_2 />
    <Ver_Tarea />
</div>
  );
}